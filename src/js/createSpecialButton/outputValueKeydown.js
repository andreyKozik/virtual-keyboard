//  highlight keys and value output
export function outputValueKeydown(array, specialButton, textareaElement) {
  document.addEventListener('keydown', (event) => {
    array.map((buttonKeyboard, i) => {
      if (event.code === buttonKeyboard[2]) {
        if (i === 13 || i === 14  || i === 28 || i === 41 || i === 42  || i === 54 || i === 58 ){
          document.querySelector(`#${buttonKeyboard[2]}`).classList.add('change-special');
        } else {
          document.querySelector(`#${buttonKeyboard[2]}`).classList.add('change');
        }
        if (i !== 60 && i !== 61 && i !== 62 && i !== 53) {
          event.preventDefault();
        }
        if (specialButton(i)) {
          textareaElement.setRangeText(document.getElementById(array[i][2]).innerHTML, 
          textareaElement.selectionStart, textareaElement.selectionEnd, "end");
        }
      }
    });
    // textareaElement.focus();
  });
  document.addEventListener('keyup', (event) => {
    for (let i = 0; i < array.length; i += 1) {
      if (event.code === array[i][2]) {
        document.querySelector(`#${array[i][2]}`).classList.remove('change-special');
        document.querySelector(`#${array[i][2]}`).classList.remove('change');
      }
    }
  });
}
