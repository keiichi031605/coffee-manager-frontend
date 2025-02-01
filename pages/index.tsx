"use client";
import Link from "next/link";
import Header from "../components/Header";
import { Box, Typography, Button } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Box
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
        style={{ paddingTop: "80px" }}
      >
        {/* Main Content */}
        <Typography
          className="text-5xl font-extrabold mb-6"
          variant="h3"
          align="center"
        >
          Welcome to Coffee Manager
        </Typography>
        <Typography
          className="max-w-xl text-lg mb-8 text-gray-300 leading-relaxed text-center"
          variant="h5"
        >
          Simplify managing your coffee shop business. Organize, analyze, and grow effortlessly.
        </Typography>

        {/* Call to Action */}
        <Link href="/sign-up">
          <Button
            className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            size="large"
            variant="contained"
            color="primary"
          >
            Get Started
          </Button>
        </Link>

        {/* Decorative Image */}
        {/* <img
          src="/images/home-image.png"
          alt="Coffee Management"
          className="mt-12 max-w-4xl shadow-lg rounded-lg"
        /> */}
      </Box>
    </>
  );
}
