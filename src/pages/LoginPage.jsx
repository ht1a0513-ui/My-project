import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../assets/Components/Common/PageHeader";
import { SectionCard } from "../assets/Components/Common/SectionCard";
import { ActionButton } from "../assets/Components/Common/ActionButton";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) validationErrors.username = "Username is required.";
    if (!formData.password) validationErrors.password = "Password is required.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("Please fill in the required fields.");
      return;
    }

    if (formData.username === "admin" && formData.password === "Admin@123") {
      setStatus("Login successful. Redirecting...");
      onLogin({ username: formData.username, loginTime: new Date().toISOString() });
      setTimeout(() => navigate("/dashboard/overview"), 600);
    } else {
      setStatus("Invalid credentials. Try admin / Admin@123");
    }
  };

  return (
    <div>
      <PageHeader title="Login" description="Secure access to the event system" />

      <SectionCard title="Admin Login" subtitle="Use the router-based login experience">
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" value={formData.username} onChange={handleChange} />
            {errors.username ? <p className="error-text">{errors.username}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input id="password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} />
              <button type="button" className="toggle-btn" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password ? <p className="error-text">{errors.password}</p> : null}
          </div>

          <div className="form-actions">
            <ActionButton label="Login" variant="primary" type="submit" />
            <ActionButton label="Cancel" variant="secondary" type="button" onClick={() => navigate(-1)} />
          </div>

          {status ? <div className={status.includes("successful") ? "success-message" : "error-summary"}>{status}</div> : null}
        </form>
      </SectionCard>
    </div>
  );
}

export default LoginPage;
