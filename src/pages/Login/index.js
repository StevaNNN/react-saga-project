import React, { useState } from "react";
import { DUMMY_JSON_API } from "../../api";
import Button from "../../components/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState();

  const hanldeEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const hanldePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const sendUser = async () => {
      const request = await fetch(`${DUMMY_JSON_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      const data = await request.json();
      setFormState(data);
    };

    sendUser();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="ss-login-form ss-vbox">
      <h1>Brand</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2>Login</h2>
        <p>Access your RemotePass account</p>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 40 }}
          onSubmit={handleFormSubmit}
        >
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" value={email} onChange={hanldeEmailChange} />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={hanldePasswordChange}
            />
          </div>
          <Button type="submit" disabled={!email || !password}>
            Sign in
          </Button>
        </form>
      </div>
      {formState?.message && (
        <div>
          <p>Please check your credentials and try again.</p>
          <button>Forgot Password</button>
        </div>
      )}
      {formState?.accessToken && "Hello user"}
    </div>
  );
};

export default LoginPage;
