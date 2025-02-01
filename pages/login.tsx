"use client";
import { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import api from "../utils/api";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { getAPIError } from "../utils/errorHandler";
import { APIError } from "../types/errors";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/users/sign_in", {
        user: { email, password },
      });

      console.log("User logged in:", response.data);
      alert("Login successful!");
      localStorage.setItem("token", response.headers.authorization || ""); // Save JWT if used
      router.push("/dashboard"); // Redirect after successful login
    } catch (err) {
      const apiError: APIError = getAPIError(err);
      console.error("Login failed:", apiError);
      setError(apiError.message);
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <Box className="min-h-screen flex flex-col items-center justify-center">
          <Typography
            className="text-white font-bold"
            variant="h4"
            align="center"
            mb={5}
          >
            Welcome Back!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="w-full p-6 bg-white rounded-lg shadow-md"
          >
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <Typography color="error" align="center">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-3 mb-2"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
