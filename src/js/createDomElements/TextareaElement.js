export class CreateTextareaElement {
    constructor(element) {
        this.element = element;
    }
    createElement(nameElement, mainElement) {
        this.element.id = (nameElement);
        this.element.autofocus = true;
        mainElement.append(this.element);
    }
}