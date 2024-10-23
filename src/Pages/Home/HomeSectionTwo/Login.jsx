import React, { useState } from "react";

import "./login.css";
import api from "../../../services/api";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await api.post();
    } catch (e) {
    } finally {
    }
  };

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <div className="login-form">
          <input
            type="text"
            placeholder="Email / Phone Number"
            value={email}
            onChange={handleMailChange}
          />
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={handleOtp}
          />
          <div className="button-otp">
            <button>Get OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};
