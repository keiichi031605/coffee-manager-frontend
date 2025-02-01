"use client";
import { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import api from "../utils/api";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { getAPIError } from "../utils/errorHandler";
import { APIError } from "../types/errors";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await api.post("/signup", {
        user: { email, password, password_confirmation: passwordConfirmation },
      });

      console.log("User signed up:", response.data);
      alert("Sign-up successful!");
      router.push("/login"); // Redirect to login after sign-up
    } catch (err) {
      const apiError: APIError = getAPIError(err);
      console.error("Sign-up failed:", apiError);
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
            Join Us!
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
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
