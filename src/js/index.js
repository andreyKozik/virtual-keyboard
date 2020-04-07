import {
  array, map, specialButton, specialCharacters,
} from './globalVariables';
import { CreateButtons } from "./createButtons";
import { tab } from './createSpecialButton/tab';
import { space } from './createSpecialButton/space';
import { backspace } from './createSpecialButton/backspace';
import { enter } from './createSpecialButton/enter';
import { shiftButtonDown } from './createSpecialButton/shiftButtonDown';
import { shiftMouseDown } from './createSpecialButton/shiftMouseDown';
import { capsLock } from './createSpecialButton/capsLock';
import { changeKeyboardLayout } from './createSpecialButton/changeKeyboardLayout';
import { outputValueKeydown } from './createSpecialButton/outputValueKeydown';
import { outputValueMousedown } from './createSpecialButton/outputValueMousedown';
import { del } from './createSpecialButton/del';
import CreateKeyboard from './createKeyboard';

const createKeyboard = new CreateKeyboard();
const { textarea, keyboardContainer } = createKeyboard;
createKeyboard.init();

localStorage.setItem('first', '0');

const createButtons = new CreateButtons(array);
createButtons.crateButton(keyboardContainer);

outputValueKeydown(array, specialButton, textarea);
outputValueMousedown(array, specialButton, textarea);
changeKeyboardLayout(map, array);
capsLock('keydown', array, specialButton);
capsLock('click', array, specialButton);
backspace('keydown', textarea);
backspace('click', textarea);
space(textarea);
tab(textarea);
enter();
shiftButtonDown('keydown', 2, 3, 4, array, specialCharacters, specialButton);
shiftButtonDown('keyup', 1, 0, 1, array, specialCharacters, specialButton);
del('keydown', textarea);
del('click', textarea);
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
