import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/operations.js';

export default function LoginForm() {
  const dispatch=useDispatch()
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({email:e.currentTarget.elements.email.value, password: e.currentTarget.elements.password.value}))
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
