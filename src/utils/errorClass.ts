/**
 * Custom error class for invalid numbers.
 *
 * @class
 * @extends Error
 */
export class NumberError extends Error {
  /**
   * Creates an instance of NumberError.
   *
   * @constructor
   * @param {string} value - The value that is not a valid number.
   */
  constructor(value: string) {
    super(`"${value}" is not a valid number`);
    this.name = "InvalidNumber";
  }
}
