import React, { useState } from "react";

import "./login.css";
import api from "../../../services/api";
import toast from "react-hot-toast";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [otpSended, setOtpSended] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = async () => {
    const toastId = toast.loading("Sending otp to mail...");
    try {
      setLoading(true);
      const res = await api.post("/users/login", { email });
      setOtpSended(true);
      console.log(res, "res");
      toast.success("Successfully sent Otp", { id: toastId });
    } catch (e) {
      console.log(e, "Error");
      toast.error("Otp senting failed", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <div>
          <h2 className="login-header">Login</h2>
          <div className="yellowBg">
            <h2></h2>
          </div>
        </div>



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
            disabled={!otpSended}
          />
          <div className="button-otp">
            <button onClick={handleLogin}>Get OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};
