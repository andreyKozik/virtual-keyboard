export function space(textareaElement) {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        textareaElement.setRangeText(" ", textareaElement.selectionStart, textareaElement.selectionEnd, "end");
        textareaElement.focus();
      }
    }
  });
  document.addEventListener('click', (event) => {
    if (event.toElement.id === 'Space') {
      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        textareaElement.setRangeText(" ", textareaElement.selectionStart, textareaElement.selectionEnd, "end");
        textareaElement.focus();
      }
    }
  });
}
