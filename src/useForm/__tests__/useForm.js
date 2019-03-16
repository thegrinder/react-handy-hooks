import { renderHook, cleanup } from 'react-hooks-testing-library';
import useForm from '../useForm';

const initialValues = {
  name: 'name',
  lastName: 'lastName',
};
const onSubmit = jest.fn();
const validate = jest.fn();

describe('useForm', () => {
  afterEach(cleanup);

  it('returns the correct object', () => {
    const { result } = renderHook(() => useForm({ initialValues, onSubmit, validate }));
    expect(result).toMatchSnapshot();
  });
});
