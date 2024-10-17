import React from 'react';

export const Login = () => {
    return (
        <div>
            <style>
                {`
                    .login-main-container {
                        width: 100vw;
                        height: 100vh;
                        background-color: #f5f5e9;
                        padding-top: 70px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-top:1px;
                        
                    }
                    .login-container {
                        width: 400px;
                        padding: 20px;
                        background-color: #f5f5e9;
                        font-family: Arial, sans-serif;
                        padding-top:1px;
                    }
                    .login-header {
                        font-size: 45px;
                        font-weight: bold;
                        color: #00004d;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .login-form {
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 15px;
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                        border: 1px solid #eee;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .login-form label {
                        font-size: 16px;
                        color: #00004d;
                        margin-bottom: 10px;
                        display: block;
                    }
                    .login-form input {
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 20px;
                        border: none;
                        border-bottom: 1px solid #00004d;
                        font-size: 16px;
                    }
                    .login-form input::placeholder {
                        color: #aaa;
                        font-weight: normal;
                    }
                    .login-form button {
                        width: 85px;
                        padding: 10px;
                        background-color: #00004d;
                        color: #fff;
                        border: none;
                        border-radius: 40px;
                        cursor: pointer;
                        text-align: center;
                    }
                    .login-form button:hover {
                        background-color: #00004d;
                    }
                `}
            </style>

            <div className="login-main-container">
                <div className="login-container">
                    <h2 className="login-header">Login</h2>

                    <div className="login-form">
                        <input type="text" placeholder="Email / Phone Number" />
                        <input type="text" placeholder="OTP" />
                        <div className="button-otp">
                            <button>Get OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


