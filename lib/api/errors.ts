/**
 * API error handling utilities
 */

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public data?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleApiError(error: unknown): string {
  if (error instanceof ApiError) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return "An unknown error occurred";
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

