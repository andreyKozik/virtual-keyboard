export class CreateKeyboardElement {
  constructor(element) {
    this.element = element;
  }
  createElement(nameElement, mainElement) {
    this.element.id = (nameElement);
    mainElement.append(this.element);
  }
}
  
