export function shiftButtonDown(touchEvent, heightLetter, enOtherSymbol, ruOtherSymbol, 
  array, specialCharacters, specialButton) {
  document.addEventListener(touchEvent, (event) => {
    for (let i = 0; i < array.length; i += 1) {
      const letterForChange = document.getElementById(array[i][2]);
      const letterForCompare = document.getElementById(array[49][2]);
      if (event.code === 'ShiftLeft' && specialButton(i)) {
        heightLetter === 2 ? letterForChange.innerHTML = letterForChange.innerHTML.toUpperCase()
          : letterForChange.innerHTML = letterForChange.innerHTML.toLowerCase();
        if (specialCharacters(i)) {
          if (letterForCompare.innerHTML === 'm' || letterForCompare.innerHTML === 'M') {
            letterForChange.innerHTML = array[i][enOtherSymbol];
          }
          if (letterForCompare.innerHTML === 'ь' || letterForCompare.innerHTML === 'Ь') {
            letterForChange.innerHTML = array[i][ruOtherSymbol];
          }
        }
      }
    }
  });
}