// collect the virtual keyboard and add the third element to the array id array for each element
export class CreateButtons {
  constructor(array) {
    this.array = array;
  }
  crateButton(keyboardElement) {
    this.array.map((buttonKeyboard) => {
      const button = document.createElement('section');
      keyboardElement.append(button);
      button.id = buttonKeyboard[2];
      document.getElementById(button.id).innerHTML = buttonKeyboard[localStorage.getItem('second')
        || localStorage.getItem('first')];
    });
  }
}
