/**
 * @module
 *
 * This is a simple module that prints a greeting.
 *
 * @example
 * ```ts
 *  import * as mod from "./main.ts";
 *
 * console.log(mod.helloDeno());
 * ```
 */

/** Prints a greeting. */
export function helloDeno(): string {
  return "Hello Deno!";
}

if (import.meta.main) {
  console.log(helloDeno());
}
