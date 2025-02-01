import axios from "axios";
import { APIError } from "../types/errors";

export function getAPIError(error: unknown): APIError {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.error || "API request failed",
      status: error.response?.status,
      details: error.message,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unknown error occurred",
  };
}
