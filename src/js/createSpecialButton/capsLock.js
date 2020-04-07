export function capsLock(touchEvent, array, specialButton) {
  document.addEventListener(touchEvent, (event) => {
    for (let i = 0; i < array.length; i += 1) {
      if ((event.code || event.toElement.id) === 'CapsLock'
        && document.querySelector(`#${array[i][2]}`).classList.contains('upperCase') === false && specialButton(i)) {
        document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toUpperCase();
        document.querySelector(`#${array[i][2]}`).classList.add('upperCase');
        document.querySelector('#CapsLock').classList.add('changeCaps');
      } else if ((event.code || event.toElement.id) === 'CapsLock'
        && document.querySelector(`#${array[i][2]}`).classList.contains('upperCase') === true) {
        document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toLowerCase();
        document.querySelector(`#${array[i][2]}`).classList.remove('upperCase');
        document.querySelector('#CapsLock').classList.remove('changeCaps');
      }
    }
  });
}