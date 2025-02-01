"use client";
import Link from "next/link";
import { AppBar, Toolbar, Button, Grid, Tooltip, IconButton, Box } from "@mui/material";
// import HelpIcon from "@mui/icons-material/Help";

export default function Header() {
  return (
    <AppBar
      className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 shadow-lg"
      position="sticky"
      style={{ padding: "10px 0" }}
    >
      <Toolbar className="max-w-[1120px] mx-auto px-6">
        <Grid container alignItems="center" spacing={2}>
          {/* Logo Section */}
          <Grid item xs>
            <Link href="/">
              <Box className="flex items-center gap-2 cursor-pointer">
                {/* <img
                  src="/images/coffee-app.png"
                  alt="logo"
                  className="h-10 w-10 object-contain"
                /> */}
                <span className="text-xl font-bold text-white">Coffee Manager</span>
              </Box>
            </Link>
          </Grid>

          {/* Navigation Buttons */}
          <Grid item>
            <Link href="/login">
              <Button
                variant="outlined"
                className="text-white border-white hover:bg-white hover:text-blue-600 transition duration-200 px-6"
              >
                Login
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/sign-up">
              <Button
                variant="contained"
                className="bg-white text-blue-600 hover:bg-gray-100 transition duration-200 px-6"
              >
                Sign Up
              </Button>
            </Link>
          </Grid>

          {/* Help Icon */}
          <Grid item>
            <Tooltip title="Help">
              <IconButton className="text-white">
                {/* <HelpIcon /> */}
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}