  "use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import api from "../utils/api";
import Header from "../components/Header";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/login", { user: { email, password } });
      if (response?.data?.status?.code === 200) {
        localStorage.setItem("token", response.headers["authorization"]);
        router.push("/coffees");
      }
    } catch {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box className="min-h-screen flex flex-col items-center justify-center">
          <Typography className="text-white font-bold" variant="h4" align="center" mb={5}>
            Welcome back!<br />We exist to make entrepreneurship easier.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-lg shadow-md">
            <TextField fullWidth label="Email Address" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error && <Typography color="error" align="center">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" color="primary" className="mt-3 mb-2">
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
