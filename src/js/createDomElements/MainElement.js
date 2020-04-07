export class CreateMainElement {
    constructor(element) {
        this.element = element;
    }
    createElement(nameElement) {
        this.element.id = (nameElement);
        document.body.append(this.element);
    }
}