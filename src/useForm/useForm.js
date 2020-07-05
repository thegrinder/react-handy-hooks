import { useState, useCallback, useMemo, useEffect } from 'react';
import equal from 'fast-deep-equal';
import { filterOut } from '../utils';

const useForm = ({
  initialValues,
  validate,
  onSubmit,
  submissionErrors,
  submitting = false,
}) => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState(
    validate ? validate(initialValues) : {}
  );
  const [touched, updateTouched] = useState({});
  const [submitErrors, updateSubmitErrors] = useState(undefined);

  useEffect(() => {
    if (submissionErrors) {
      updateSubmitErrors(submissionErrors);
    }
  }, [submissionErrors]);

  const runValidation = useCallback(
    (formValues) => {
      if (validate) {
        updateErrors(validate(formValues));
      }
    },
    [validate]
  );

  const invalid = useMemo(() => !!Object.keys(errors).length, [errors]);

  const pristine = useMemo(() => equal(initialValues, values), [
    initialValues,
    values,
  ]);

  const getFieldProps = useCallback(
    (name) => ({
      submitting,
      error: errors[name],
      submissionError: submitErrors && submitErrors[name],
      touched: !!touched[name],
      value: values[name],
      onChange(e) {
        const newValues = { ...values, [name]: e.target.value };
        if (submitErrors) {
          updateSubmitErrors((prevErrors) => filterOut(prevErrors, name));
        }
        updateValues(newValues);
        runValidation(newValues);
      },
      onBlur() {
        updateTouched({ ...touched, [name]: true });
      },
    }),
    [errors, runValidation, submitErrors, submitting, touched, values]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!invalid && onSubmit) {
        if (submitErrors) {
          updateSubmitErrors(undefined);
        }
        onSubmit(values);
      }
    },
    [invalid, onSubmit, submitErrors, values]
  );

  const resetForm = useCallback(() => {
    updateValues(initialValues);
    updateSubmitErrors(undefined);
    updateErrors({});
    updateTouched({});
  }, [initialValues]);

  return {
    getFieldProps,
    invalid,
    pristine,
    submitting,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
