import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../useForm';

const initialValues = {
  name: 'name',
  lastName: 'lastName',
};
const errorMessage = 'required';
const onSubmit = jest.fn();
const validate = (values) => {
  const errors = {};
  if (values.name === '') {
    errors.name = errorMessage;
  }
  if (values.lastName === '') {
    errors.lastName = errorMessage;
  }
  return errors;
};

describe('useForm', () => {
  afterEach(() => {
    onSubmit.mockClear();
  });

  it('should return the correct object', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues,
        onSubmit,
        validate,
      })
    );
    [
      'getFieldProps',
      'invalid',
      'pristine',
      'submitting',
      'handleSubmit',
      'resetForm',
    ].forEach((property) => {
      expect(result.current).toHaveProperty(property);
    });
  });

  describe('invalid form flag', () => {
    it('should be false if no validate function is provided', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
        })
      );
      expect(result.current.invalid).toEqual(false);
    });

    it('should be false if the fields are valid', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      expect(result.current.invalid).toEqual(false);
    });

    it('should be true if at least one of fields is invalid', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            ...initialValues,
            name: '',
          },
          onSubmit,
          validate,
        })
      );
      expect(result.current.invalid).toEqual(true);
    });
  });

  describe('pristine form flag', () => {
    it('should be true when the form is initialized', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      expect(result.current.pristine).toEqual(true);
    });

    it('should be false if one of the field values has changed', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      act(() => {
        result.current
          .getFieldProps('name')
          .onChange({ target: { value: 'value' } });
      });
      expect(result.current.pristine).toEqual(false);
    });
  });

  describe('submitting form flag', () => {
    it('should be false by default', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      expect(result.current.submitting).toEqual(false);
    });

    it('should be the same as the submitting argument', () => {
      const submitting = true;
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
          submitting,
        })
      );
      expect(result.current.submitting).toEqual(submitting);
    });
  });

  describe('handleSubmit', () => {
    it('should fire provided onSubmit callback with form values', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(preventDefault).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith(initialValues);
    });

    it('should not fire provided onSubmit callback if the form is invalid', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            ...initialValues,
            name: '',
          },
          onSubmit,
          validate,
        })
      );
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  describe('resetForm', () => {
    it('should set form to its initial values', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );

      act(() => {
        result.current
          .getFieldProps('name')
          .onChange({ target: { value: '' } });
      });
      act(() => {
        result.current
          .getFieldProps('lastName')
          .onChange({ target: { value: '' } });
      });
      expect(result.current.getFieldProps('name').value).toEqual('');
      expect(result.current.getFieldProps('lastName').value).toEqual('');

      act(() => {
        result.current.resetForm();
      });
      expect(result.current.getFieldProps('name').value).toEqual(
        initialValues.name
      );
      expect(result.current.getFieldProps('lastName').value).toEqual(
        initialValues.lastName
      );
    });
  });

  describe('getFieldProps', () => {
    it('should return the correct object', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      [
        'error',
        'submissionError',
        'submitting',
        'touched',
        'value',
        'onChange',
        'onBlur',
        'setValue',
      ].forEach((property) => {
        expect(result.current.getFieldProps('name')).toHaveProperty(property);
        expect(result.current.getFieldProps('lastName')).toHaveProperty(
          property
        );
      });
    });
  });

  describe('onChange', () => {
    it('should properly handle value change', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: initialValues.name,
        error: undefined,
      });

      act(() => {
        result.current
          .getFieldProps('name')
          .onChange({ target: { value: 'test' } });
      });
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: 'test',
        error: undefined,
      });

      act(() => {
        result.current
          .getFieldProps('name')
          .onChange({ target: { value: '' } });
      });
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: '',
        error: errorMessage,
      });
    });

    it('should reset submission error if any', () => {
      const error = 'name error';
      const submissionErrors = {
        name: error,
      };
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          submissionErrors,
        })
      );
      expect(result.current.getFieldProps('name').submissionError).toEqual(
        error
      );

      act(() => {
        result.current
          .getFieldProps('name')
          .onChange({ target: { value: 'a' } });
      });

      expect(result.current.getFieldProps('name').submissionError).toEqual(
        undefined
      );
    });
  });

  describe('setValue', () => {
    it('should properly handle value change', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: initialValues.name,
        error: undefined,
      });

      act(() => {
        result.current.getFieldProps('name').setValue('test');
      });
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: 'test',
        error: undefined,
      });

      act(() => {
        result.current.getFieldProps('name').setValue('');
      });
      expect(result.current.getFieldProps('name')).toMatchObject({
        value: '',
        error: errorMessage,
      });
    });

    it('should reset submission error if any', () => {
      const error = 'name error';
      const submissionErrors = {
        name: error,
      };
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          submissionErrors,
        })
      );
      expect(result.current.getFieldProps('name').submissionError).toEqual(
        error
      );

      act(() => {
        result.current.getFieldProps('name').setValue('a');
      });

      expect(result.current.getFieldProps('name').submissionError).toEqual(
        undefined
      );
    });
  });

  describe('onBlur', () => {
    it('should properly handle blur', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues,
          onSubmit,
          validate,
        })
      );
      expect(result.current.getFieldProps('lastName').touched).toEqual(false);

      act(() => {
        result.current.getFieldProps('lastName').onBlur();
      });
      expect(result.current.getFieldProps('lastName').touched).toEqual(true);
    });
  });
});
