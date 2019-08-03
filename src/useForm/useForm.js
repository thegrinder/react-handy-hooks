import { useState, useCallback, useMemo } from 'react';
import equal from 'fast-deep-equal';

const useForm = ({ initialValues, validate, onSubmit, submitting = false }) => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState(
    validate ? validate(initialValues) : {}
  );
  const [touched, updateTouched] = useState({});

  const runValidation = useCallback(
    formValues => {
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
    name => ({
      submitting,
      error: errors[name],
      touched: !!touched[name],
      value: values[name],
      onChange(e) {
        const newValues = { ...values, [name]: e.target.value };
        updateValues(newValues);
        runValidation(newValues);
      },
      onBlur() {
        updateTouched({ ...touched, [name]: true });
      },
    }),
    [errors, runValidation, submitting, touched, values]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!invalid && onSubmit) {
        onSubmit(values);
      }
    },
    [invalid, onSubmit, values]
  );

  const resetForm = useCallback(() => {
    updateValues(initialValues);
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
