import { renderHook, cleanup, act } from 'react-hooks-testing-library';
import useForm from '../useForm';

const initialValues = {
  name: 'name',
  lastName: 'lastName',
};
const onSubmit = jest.fn();
const validate = (values) => {
  const errors = {};
  if (values.name === '') {
    errors.name = 'required name';
  }
  if (values.lastName === '') {
    errors.lastName = 'required last name';
  }
  return errors;
};

describe('useForm', () => {
  afterEach(() => {
    cleanup();
    onSubmit.mockClear();
  });

  it('returns the correct object', () => {
    const { result } = renderHook(() => useForm({
      initialValues,
      onSubmit,
      validate,
    }));
    ['getFieldProps', 'invalid', 'pristine', 'handleSubmit', 'resetForm'].forEach((property) => {
      expect(result.current).toHaveProperty(property);
    });
    expect(result.current).toMatchSnapshot();
  });

  describe('invalid form flag', () => {
    it('should be false if no validate function is provided', () => {
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
      }));
      expect(result.current.invalid).toEqual(false);
    });

    it('should be false if the fields are valid', () => {
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
        validate,
      }));
      expect(result.current.invalid).toEqual(false);
    });

    it('should be true if at least one of fields is invalid', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          ...initialValues,
          name: '',
        },
        onSubmit,
        validate,
      }));
      expect(result.current.invalid).toEqual(true);
    });
  });

  describe('pristine form flag', () => {
    it('should be true when the form is initialized', () => {
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
        validate,
      }));
      expect(result.current.pristine).toEqual(true);
    });

    it('should be false if one of the field values has changed', () => {
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
        validate,
      }));
      act(() => {
        result.current.getFieldProps('name').onChange({ target: { value: 'value' } });
      });
      expect(result.current.pristine).toEqual(false);
    });
  });

  describe('handleSubmit', () => {
    it('should fire provided onSubmit callback with form values', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
        validate,
      }));
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(preventDefault).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith(initialValues);
    });

    it('should not fire provided onSubmit callback if the form is invalid', () => {
      const preventDefault = jest.fn();
      const { result } = renderHook(() => useForm({
        initialValues: {
          ...initialValues,
          name: '',
        },
        onSubmit,
        validate,
      }));
      act(() => {
        result.current.handleSubmit({ preventDefault });
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });
});
