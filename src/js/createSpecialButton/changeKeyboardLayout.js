export function changeKeyboardLayout(map, array) {
  document.addEventListener('keydown', (event) => {
    map[event.keyCode] = true;
    const flag = document.getElementById(array[15][2]);
    if (map['17'] === true && map['18'] === true && flag.textContent === 'q') {
      for (let i = 0; i < array.length; i += 1) {
        document.getElementById(array[i][2]).innerHTML = array[i][1];
        localStorage.setItem('second', '1');
      }
    } else if (map['17'] === true && map['18'] === true && flag.textContent === 'й') {
      for (let i = 0; i < array.length; i += 1) {
        document.getElementById(array[i][2]).innerHTML = array[i][0];
        localStorage.setItem('second', '0');
      }
    } else if (map['17'] === true && map['18'] === true && flag.textContent === 'Q') {
      for (let i = 0; i < array.length; i += 1) {
        document.getElementById(array[i][2]).innerHTML = array[i][1];
        if (specialButton(i)) {
          document.getElementById(array[i][2]).textContent = document.getElementById(array[i][2]).innerHTML.toUpperCase();
        }
      }
    } else if (map['17'] === true && map['18'] === true && flag.textContent === 'Й') {
      for (let i = 0; i < array.length; i += 1) {
        document.getElementById(array[i][2]).innerHTML = array[i][0];
        if (specialButton(i)) {
          document.getElementById(array[i][2]).textContent = document.getElementById(array[i][2]).innerHTML.toUpperCase();
        }
      }
    }
  });

  document.addEventListener('keyup', (event) => {
    map[event.keyCode] = false;
    delete map[event.keyCode];
  });
}
