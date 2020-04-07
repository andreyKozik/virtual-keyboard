import {
  array, map, mainElement, keyboardElement, textareaElement, specialButton,
  descriptionKeyboardElement, specialCharacters,
} from './globalVariables.js';
import { CreateMainElement } from './createDomElements/MainElement.js';
import { CreateKeyboardElement } from './createDomElements/KeyboardElement.js';
import { CreateTextareaElement } from './createDomElements/TextareaElement.js';
import { KeyboardBuilder } from './createDomElements/KeyboardBuilder.js';
import { tab } from './createSpecialButton/tab.js';
import { space } from './createSpecialButton/space.js';
import { backspace } from './createSpecialButton/backspace.js';
import { enter } from './createSpecialButton/enter.js';
import { shiftButtonDown } from './createSpecialButton/shiftButtonDown.js';
import { shiftMouseDown } from './createSpecialButton/shiftMouseDown.js';
import { capsLock } from './createSpecialButton/capsLock.js';
import { changeKeyboardLayout } from './createSpecialButton/changeKeyboardLayout.js';
import { outputValueKeydown } from './createSpecialButton/outputValueKeydown.js';
import { outputValueMousedown } from './createSpecialButton/outputValueMousedown.js';
import { del } from './createSpecialButton/del.js';


const main = new CreateMainElement(mainElement);
main.createElement('main');

const textarea = new CreateTextareaElement(textareaElement);
textarea.createElement('textarea', mainElement);

const keyboard = new CreateKeyboardElement(keyboardElement);
keyboard.createElement('keyboard', mainElement);

const descriptionKeyboard = new CreateKeyboardElement(descriptionKeyboardElement);
descriptionKeyboard.createElement('descriptionKeyboard', mainElement);
document.getElementById('descriptionKeyboard').innerHTML = `Создано в операционной системе Windows <br>
Для смены языка нажмите комбинацию клавишь:
<br>для Win: CTRL + ALT<br>для Mac: CTRL + OPTION`;

localStorage.setItem('first', '0');

const keyboardBuilder = new KeyboardBuilder(array);
keyboardBuilder.crateButton(keyboardElement);


outputValueKeydown(array, specialButton, textareaElement);
outputValueMousedown(array, specialButton, textareaElement);
changeKeyboardLayout(map, array);
capsLock('keydown', array, specialButton);
capsLock('click', array, specialButton);
backspace('keydown', textareaElement);
backspace('click', textareaElement);
space(textareaElement);
tab(textareaElement);
enter();
shiftButtonDown('keydown', 2, 3, 4, array, specialCharacters, specialButton);
shiftButtonDown('keyup', 1, 0, 1, array, specialCharacters, specialButton);
del('keydown', textareaElement);
del('click', textareaElement);
document.addEventListener('mousedown', (event) => {
  if (event.toElement.id === 'ShiftLeft') {
    shiftMouseDown(2, 2, 3, 4, array, specialCharacters, specialButton);
  }
});
document.addEventListener('mouseup', (event) => {
  if (event.toElement.id === 'ShiftLeft') {
    shiftMouseDown(1, 1, 0, 1, array, specialCharacters, specialButton);
  }
});
