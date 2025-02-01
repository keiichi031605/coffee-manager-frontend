"use client";
import { useState } from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import api from "../utils/api";
import Header from "../components/Header";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (password !== passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    console.log("email", email)
    console.log("password", password)
    console.log("passwordConfirmation", passwordConfirmation)
  
    try {
      const response = await api.post("/signup", {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
  
      console.log("User signed up:", response.data);
      alert("Sign-up successful!");
    } catch (error: any) {
      console.error("Sign-up failed:", error.response?.data || error.message);
      alert("Sign-up failed. Please try again.");
    }
  };
  
  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <Box className="min-h-screen flex flex-col items-center justify-center">
          <Typography className="text-white font-bold" variant="h4" align="center" mb={5}>
            Join Us!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-lg shadow-md">
            <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <TextField fullWidth label="Confirm Password" type="password" margin="normal" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
            <Button type="submit" fullWidth variant="contained" color="primary" className="mt-3 mb-2">Sign Up</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
