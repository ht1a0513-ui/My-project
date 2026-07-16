import { useState } from "react";
import "./LoginPage.css";
import { ActionButton } from "../../../Components/Common/ActionButton";

function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatusMessage({ type: "", text: "" });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "Email or username is required.";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required.";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage({ type: "error", text: "Please complete the required fields." });
      return;
    }

    setIsLoading(true);
    setStatusMessage({ type: "", text: "" });

    window.setTimeout(() => {
      const normalizedUser = formData.username.trim().toLowerCase();
      const isValidLogin =
        normalizedUser === "admin" ||
        normalizedUser === "admin@event.com" ||
        normalizedUser === "student@event.com";

      if (isValidLogin && formData.password === "Admin@123") {
        setStatusMessage({ type: "success", text: `Welcome back, ${formData.username}!` });
        onLogin(formData.username.trim());
      } else {
        setStatusMessage({ type: "error", text: "Invalid credentials. Try admin@event.com with password Admin@123." });
      }

      setIsLoading(false);
    }, 1600);
  };

  const handleClear = () => {
    setFormData({ username: "", password: "" });
    setErrors({});
    setStatusMessage({ type: "", text: "" });
    setShowPassword(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <p className="auth-badge">Secure Access</p>
          <h1>Event Admin Login</h1>
          <p>Use your credentials to access the registration dashboard.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="username">Email / Username</label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="admin@event.com"
            />
            {errors.username ? <p className="error-text">{errors.username}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              <button type="button" className="toggle-btn" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password ? <p className="error-text">{errors.password}</p> : null}
          </div>

          <div className="auth-actions">
            <ActionButton label={isLoading ? "Logging in..." : "Login"} variant="primary" type="submit" disabled={isLoading} />
            <ActionButton label="Clear" variant="secondary" type="button" onClick={handleClear} />
          </div>

          {isLoading && <div className="loading-state">Checking your credentials...</div>}

          {statusMessage.text ? (
            <div className={statusMessage.type === "success" ? "success-message" : "error-summary"}>
              {statusMessage.text}
            </div>
          ) : null}

          <div className="auth-links">
            <span>Forgot password?</span>
            <span>•</span>
            <span>Register</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
export { LoginPage };