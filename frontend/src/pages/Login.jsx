import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/customer");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>QueueCare</h1>
          <p>Hospital Queue Management System</p>
        </div>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Manage your queue with ease
        </p>
      </div>
    </div>
  );
}

export default Login;