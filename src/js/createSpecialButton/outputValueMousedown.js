// displaying values from the virtual keyboard when you click the mouse
export function outputValueMousedown(array, specialButton, textareaElement) {
  document.addEventListener('mousedown', (event) => {
    for (let i = 0; i < array.length; i += 1) {
      if (event.toElement.id === array[i][2]) {
        if (specialButton(i)) {
          textareaElement.setRangeText(document.getElementById(array[i][2]).innerHTML,
          textareaElement.selectionStart, textareaElement.selectionEnd, "end");
          textareaElement.focus();
        }
        if (i === 13 || i === 14  || i === 28 || i === 41 || i === 42  || i === 54 || i === 58 ){
          document.querySelector(`#${array[i][2]}`).classList.add('change-special');
        } else {
          document.querySelector(`#${array[i][2]}`).classList.add('change');
        }
      }
    }
  });
  document.addEventListener('mouseup', (event) => {
    for (let i = 0; i < array.length; i += 1) {
      if (event.toElement.id === array[i][2]) {
        document.querySelector(`#${array[i][2]}`).classList.remove('change-special');
        document.querySelector(`#${array[i][2]}`).classList.remove('change');
      }
    }
  });
  document.addEventListener('mouseover', (event) => {
    if (event.toElement.id === 'keyboard') {
      for (let i = 0; i < array.length; i += 1) {
        document.querySelector(`#${array[i][2]}`).classList.remove('change-special');
        document.querySelector(`#${array[i][2]}`).classList.remove('change');
      }
    }
  });
}


