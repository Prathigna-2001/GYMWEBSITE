import React, { useState } from "react";
import "../styles/login.css";

function Login({ switchToRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setError("");
        console.log("Logging in with:", email, password);
        alert("Login successful!");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">GymX Login</h2>

                {error && <p className="error">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                <p className="signup-text">
                    Don't have an account?{" "}
                    <span className="link" onClick={switchToRegister}>
                        Register
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
