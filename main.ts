/**
 * This is a simple module that prints a greeting.
 * @module
 */

/** Prints a greeting. */
export function helloDeno(): string {
  return "Hello Deno!";
}

if (import.meta.main) {
  console.log(helloDeno());
}
