export function tab(textareaElement) {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Tab') {
      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        textareaElement.setRangeText("    ", textareaElement.selectionStart, textareaElement.selectionEnd, "end");
        textareaElement.focus();
      }
    }
  });

  document.addEventListener('click', (event) => {
    if (event.toElement.id === 'Tab') {
      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        textareaElement.setRangeText("    ", textareaElement.selectionStart, textareaElement.selectionEnd, "end");
        textareaElement.focus();
      }
    }
  });
}
