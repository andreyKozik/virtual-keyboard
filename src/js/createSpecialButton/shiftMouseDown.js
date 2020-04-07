export function shiftMouseDown(changeShift, heightLetter, enOtherSymbol, 
  ruOtherSymbol, array, specialCharacters, specialButton) {
  for (let i = 0; i < array.length; i += 1) {
    const letterForChange = document.getElementById(array[i][2]);
    const letterForCompare = document.getElementById(array[49][2]);
    if (specialButton(i)) {
      heightLetter === 2 ? letterForChange.innerHTML = letterForChange.innerHTML.toUpperCase()
        : letterForChange.innerHTML = letterForChange.innerHTML.toLowerCase();
    }
    changeShift === 2 ? document.querySelector('#ShiftLeft').classList.add('changeShift')
      : document.querySelector('#ShiftLeft').classList.remove('changeShift');
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