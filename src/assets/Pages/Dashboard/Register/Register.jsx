import { useState } from "react";
import "./Register.css";
import { PageHeader } from "../../../Components/Common/PageHeader";
import { SectionCard } from "../../../Components/Common/SectionCard";
import { ActionButton } from "../../../Components/Common/ActionButton";

const initialState = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  gender: "",
  dob: "",
  college: "",
  branch: "",
  graduationYear: "",
  skills: "",
  resume: "",
  termsAccepted: false,
};

function Register() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccessMessage("");
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!formData.mobile.trim()) {
      validationErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = "Mobile number must be exactly 10 digits.";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(formData.password)) {
      validationErrors.password = "Password must be at least 8 characters with uppercase, lowercase, number, and a special character.";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.gender) {
      validationErrors.gender = "Please select a gender.";
    }

    if (!formData.dob) {
      validationErrors.dob = "Date of birth is required.";
    }

    if (!formData.college.trim()) {
      validationErrors.college = "College name is required.";
    }

    if (!formData.branch.trim()) {
      validationErrors.branch = "Branch is required.";
    }

    if (!formData.graduationYear.trim()) {
      validationErrors.graduationYear = "Graduation year is required.";
    }

    if (!formData.skills.trim()) {
      validationErrors.skills = "Please add your skills.";
    }

    if (!formData.termsAccepted) {
      validationErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(`Registration successful for ${formData.fullName}!`);
    setFormData(initialState);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setSuccessMessage("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleResumeUpload = (e) => {
    const fileName = e.target.files[0]?.name || "";
    setFormData((prev) => ({ ...prev, resume: fileName }));
    setErrors((prev) => ({ ...prev, resume: "" }));
    setSuccessMessage("");
  };

  return (
    <div>
      <PageHeader
        title="Student Registration"
        description="Register for upcoming events with complete profile details"
      />

      <SectionCard
        title="Registration Form"
        subtitle="All fields are controlled with React state and validated before submission"
      >
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName ? <p className="error-text">{errors.fullName}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email ? <p className="error-text">{errors.email}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
              {errors.mobile ? <p className="error-text">{errors.mobile}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender ? <p className="error-text">{errors.gender}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="dob">Date of Birth</label>
              <input id="dob" type="date" name="dob" value={formData.dob} onChange={handleChange} />
              {errors.dob ? <p className="error-text">{errors.dob}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="college">College Name</label>
              <input id="college" name="college" value={formData.college} onChange={handleChange} />
              {errors.college ? <p className="error-text">{errors.college}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="branch">Branch</label>
              <input id="branch" name="branch" value={formData.branch} onChange={handleChange} />
              {errors.branch ? <p className="error-text">{errors.branch}</p> : null}
            </div>

            <div className="field-group">
              <label htmlFor="graduationYear">Graduation Year</label>
              <input id="graduationYear" name="graduationYear" value={formData.graduationYear} onChange={handleChange} />
              {errors.graduationYear ? <p className="error-text">{errors.graduationYear}</p> : null}
            </div>
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
              />
              <button type="button" className="toggle-btn" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password ? <p className="error-text">{errors.password}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-wrapper">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="button" className="toggle-btn" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword ? <p className="error-text">{errors.confirmPassword}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="skills">Skills</label>
            <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} rows="3" />
            {errors.skills ? <p className="error-text">{errors.skills}</p> : null}
          </div>

          <div className="field-group">
            <label htmlFor="resume">Resume Upload (UI only)</label>
            <input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            {formData.resume ? <p className="helper-text">Selected file: {formData.resume}</p> : null}
          </div>

          <label className="checkbox-row">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <span>I accept the terms and conditions.</span>
          </label>
          {errors.termsAccepted ? <p className="error-text">{errors.termsAccepted}</p> : null}

          <div className="form-actions">
            <ActionButton label="Register" variant="primary" type="submit" />
            <ActionButton label="Reset" variant="secondary" type="button" onClick={handleReset} />
          </div>

          {successMessage ? <div className="success-message">{successMessage}</div> : null}
          {Object.keys(errors).length > 0 && !successMessage ? (
            <div className="error-summary">Please fix the highlighted fields before submitting.</div>
          ) : null}
        </form>
      </SectionCard>
    </div>
  );
}

export default Register;