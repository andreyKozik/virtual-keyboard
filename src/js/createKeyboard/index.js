import {helperMessage} from "../globalVariables";

export default class CreateKeyboard {
  constructor() {
    this.main = document.createElement('main');
    this.main.id = 'main';

    this.textarea = document.createElement('textarea');
    this.textarea.id = 'textarea';
    this.textarea.autofocus = true;

    this.keyboardContainer = document.createElement('div');
    this.keyboardContainer.id = 'keyboard';

    this.descriptionKeyboard = document.createElement('div');
    this.descriptionKeyboard.innerHTML = helperMessage;
    this.descriptionKeyboard.id = 'descriptionKeyboard';
  }

  init() {
    const { main, textarea, keyboardContainer, descriptionKeyboard} = this;
    document.body.append(main);
    main.append(textarea, keyboardContainer, descriptionKeyboard);
  }
}