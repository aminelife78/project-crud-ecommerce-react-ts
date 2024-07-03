/**
 * Truncate a string to a specified maximum length, appending "..." if it exceeds that length.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} [maxLength=50] - The maximum allowed length of the string. Default is 50.
 * @returns {string} - The truncated string with "..." appended if it exceeds the maximum length.
 */


// cette option en peut faire avec tailwind en utilise le mot truncate
export function textSlice(text: string, maxLenght: number = 50) {
  if (text.length > maxLenght) {
    return text.slice(0, maxLenght) + "...";
  } else {
    return text;
  }
}

