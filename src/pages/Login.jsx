import { useState } from "react";
import axios from "axios";
import { api } from "../api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const res = await api.get("/products");
  

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/login`, {
        username,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      onLogin(res.data.user);
    } catch (err) {
      alert("Login gagal");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login POS</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 300,
    margin: "100px auto"
  }
};