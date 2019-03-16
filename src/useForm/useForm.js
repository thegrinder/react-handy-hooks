import { useState } from 'react';
import equal from 'fast-deep-equal';

const useForm = ({ initialValues, validate, onSubmit }) => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState({});
  const [touched, updateTouched] = useState({});

  const runValidation = (formValues) => {
    if (validate) {
      updateErrors(validate(formValues));
    }
  };

  const invalid = !!Object.keys(errors).length;
  const pristine = equal(initialValues, values);

  const getFieldProps = name => ({
    error: errors[name],
    touched: touched[name],
    value: values[name],
    onChange(e) {
      const newValues = { ...values, [name]: e.target.value };
      updateValues(newValues);
      runValidation(newValues);
    },
    onBlur() {
      updateTouched({ ...touched, [name]: true });
      runValidation(values);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!invalid) {
      onSubmit(values);
    }
  }

  const resetForm = () => {
    updateValues(initialValues);
    updateErrors({});
    updateTouched({});
  };

  return {
    getFieldProps,
    invalid,
    pristine,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
