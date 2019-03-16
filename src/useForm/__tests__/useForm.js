import { renderHook, cleanup } from 'react-hooks-testing-library';
import useForm from '../useForm';

const initialValues = {
  name: 'name',
  lastName: 'lastName',
};
const onSubmit = jest.fn();
const validate = jest.fn().mockImplementation(() => ({}));

describe('useForm', () => {
  afterEach(cleanup);

  it('returns the correct object', () => {
    const { result: { current } } = renderHook(() => useForm({
      initialValues,
      onSubmit,
      validate,
    }));
    ['getFieldProps', 'invalid', 'pristine', 'handleSubmit', 'resetForm'].forEach((property) => {
      expect(current).toHaveProperty(property);
    });
    expect(current).toMatchSnapshot();
  });

  describe('invalid', () => {
    it('returns false if no validate function is provided', () => {
      const { result: { current } } = renderHook(() => useForm({
        initialValues,
        onSubmit,
      }));
      expect(current.invalid).toEqual(false);
    });

    it('returns false if the fields are valid', () => {
      const validateFunc = (values) => {
        const errors = {};
        if (values.name === '') {
          errors.name = 'required';
        }
        return errors;
      };
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
        validate: validateFunc,
      }));
      expect(result.current.invalid).toEqual(false);
    });

    it('return true if at least one of fields is invalid', () => {
      const validateFunc = (values) => {
        const errors = {};
        if (values.name === 'name') {
          errors.name = 'invalid name';
        }
        return errors;
      };
      const { result } = renderHook(() => useForm({
        initialValues,
        onSubmit,
        validate: validateFunc,
      }));
      expect(result.current.invalid).toEqual(true);
    });
  });
});
