export function backspace(touchEvent, textareaElement) {
  document.addEventListener(touchEvent, (event) => {
    if ((event.code || event.toElement.id) === 'Backspace') {
      if (textareaElement.selectionStart === 0) return
      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        textareaElement.setRangeText("", textareaElement.selectionStart - 1, textareaElement.selectionEnd, "end");
        textareaElement.focus();
      } 
    }
  });
}