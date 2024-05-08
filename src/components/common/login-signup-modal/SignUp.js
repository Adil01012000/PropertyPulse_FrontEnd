import Link from "next/link";
import { useState } from "react";

const SignUp = () => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    let data = { username, email, password }
    await fetch("http://localhost:5000/api/auth/register", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('API Success!');
        } else {
          console.log('API Failure!');
        }
      })
      .catch((error) => {
        console.log('Server Error');
      })
  }

  return (
    <form className="form-style1">
      <div className="mb25">
        <label className="form-label fw600 dark-color">Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter Username"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb20">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit" onClick={register}>
          Register <i className="fal fa-arrow-right-long" />
        </button>
      </div>
    </form>
  );
};

export default SignUp;
