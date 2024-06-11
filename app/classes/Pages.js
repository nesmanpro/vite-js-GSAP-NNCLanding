import TextReveal from '../animations/TextReveal';
import Button from '../animations/Button';
import ParallaxImage from '../animations/ParallaxImage';
import List from '../animations/List';

export default class Pages {

    constructor() {
        this._createTextReveal();
        this._createButtons();
        this._createParallax();
        this._createList();
    }



    _createTextReveal() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')];

        textItems.forEach((text) => {
            new TextReveal({
                element: text,
            });
        })
    }

    _createButtons() {
        const buttons = [...document.querySelectorAll('[data-animation="button"]')];

        buttons.forEach((button) => {
            new Button({
                element: button
            })
        })
    }

    _createParallax() {
        const images = [...document.querySelectorAll('[data-animation="parallax-image"]')];

        images.forEach((image) => {
            new ParallaxImage({
                imageSection: image,
            })
        })
    }

    _createList() {
        const lists = [...document.querySelectorAll('.list__item')];

        lists.forEach((list) => {
            new List({
                element: list,
            })
        })
    }

}