export function del(touchEvent, textareaElement) {
  document.addEventListener(touchEvent, (event) => {
    if ((event.code || event.toElement.id) === 'Delete') {
      if (textareaElement.selectionStart === 0) return
      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        textareaElement.setRangeText("", textareaElement.selectionStart, textareaElement.selectionEnd + 1, "end");
        textareaElement.focus();
      }
    }
  });
}   