// array for rendering keyboard
// the zero element subarray is an English small letter
// the first element is a Russian small letter
// the second element is the event.code key
// the third element is a special symbol of the English layout
// the fourth element is a special symbol of the Russian layout
export const array = [['`', 'ё', 'Backquote', '~', 'Ё'], [1, 1, 'Digit1', '!', '!'], [2, 2, 'Digit2', '@', '"'],
  [3, 3, 'Digit3', '#', '№'], [4, 4, 'Digit4', '$', ';'], [5, 5, 'Digit5', '%', '%'], [6, 6, 'Digit6', '^', ':'],
  [7, 7, 'Digit7', '&', '?'], [8, 8, 'Digit8', '*', '*'], [9, 9, 'Digit9', '(', '('], [0, 0, 'Digit0', ')', ')'],
  ['-', '-', 'Minus', '_', '_'], ['=', '=', 'Equal', '+', '+'], ['&#8592 Back', '&#8592 Back', 'Backspace'],
  ['Tab', 'Tab', 'Tab'], ['q', 'й', 'KeyQ'], ['w', 'ц', 'KeyW'], ['e', 'у', 'KeyE'], ['r', 'к', 'KeyR'],
  ['t', 'е', 'KeyT'], ['y', 'н', 'KeyY'], ['u', 'г', 'KeyU'], ['i', 'ш', 'KeyI'], ['o', 'щ', 'KeyO'],
  ['p', 'з', 'KeyP'], ['[', 'х', 'BracketLeft', '{', 'Х'], [']', 'ъ', 'BracketRight', '', '}', 'Ъ'],
  ['Del', 'Del', 'Delete'], ['CapsLock', 'CapsLock', 'CapsLock'], ['a', 'ф', 'KeyA'], ['s', 'ы', 'KeyS'],
  ['d', 'в', 'KeyD'], ['f', 'а', 'KeyF'], ['g', 'п', 'KeyG'], ['h', 'р', 'KeyH'], ['j', 'о', 'KeyJ'],
  ['k', 'л', 'KeyK'], ['l', 'д', 'KeyL'], [';', 'ж', 'Semicolon', ':', 'Ж'], ['&#8242;', 'э', 'Quote', '"', 'Э'],
  ['\\', '\\', 'Backslash', '|', '/'], ['Enter', 'Enter', 'Enter'], ['Shift', 'Shift', 'ShiftLeft'], ['z', 'я', 'KeyZ'],
  ['x', 'ч', 'KeyX'], ['c', 'с', 'KeyC'], ['v', 'м', 'KeyV'], ['b', 'и', 'KeyB'], ['n', 'т', 'KeyN'],
  ['m', 'ь', 'KeyM'], [',', 'б', 'Comma', '<', 'Б'], ['.', 'ю', 'Period', '>', 'Ю'], ['/', '.', 'Slash', '?', ','],
  ['&#8593', '&#8593', 'ArrowUp'], ['Shift', 'Shift', 'ShiftRight'], ['Ctrl', 'Ctrl', 'ControlLeft'],
  ['Win', 'Win', 'MetaLeft'], ['Alt', 'Alt', 'AltLeft'], ['Space', 'Space', 'Space'], ['Alt', 'Alt', 'AltRight'],
  ['&#8592', '&#8592', 'ArrowLeft'], ['&#8595', '&#8595', 'ArrowDown'], ['&#8594', '&#8594', 'ArrowRight'],
  ['Ctrl', 'Ctrl', 'ControlRight'],
];

export const helperMessage = `Клавиатура создавалась<br> в операционной системе Windows<br> 
Для смены языка нажмите <br>комбинацию клавишь:
<br>для Win: CTRL + ALT<br>для Mac: CTRL + OPTION`;

export function specialButton(i) {
  if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 53 && i !== 54 && i !== 55
  && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 60 && i !== 61 && i !== 62 && i !== 63) return true;
  return false;
}

export function specialCharacters(i) {
  if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6
    || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12 || i === 25
    || i === 26 || i === 38 || i === 39 || i === 40 || i === 50 || i === 51 || i === 52) { return true; } return false;
}

export const map = {}; // the flags of the object for tracking pressing two keys
