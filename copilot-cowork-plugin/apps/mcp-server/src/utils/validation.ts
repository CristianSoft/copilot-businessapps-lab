import { ZodError } from "zod";

export function formatValidationError(error: unknown) {
  if (error instanceof ZodError) {
    return error.errors.map((item) => `${item.path.join(".")}: ${item.message}`).join("; ");
  }
  return String(error);
}
