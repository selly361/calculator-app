/**

Returns the selected text in the current window.
@function
@returns {string|null|undefined} The selected text as a string, or null if no text is selected.
*/
export function getSelectedText() {
  let text = null;
  if (typeof window.getSelection !== "undefined") {
    text = window.getSelection()?.toString();
  }
  return text;
}
