import '../sass/index.scss';
import SmoothScroll from './animations/SmoothScroll'
import Home from './pages/Home';


class App {
    constructor() {
        document.body.style.opacity = '1';
        this._createSmoothScroll();
        this._createHome();

    }

    _createSmoothScroll() {
        new SmoothScroll();
    }


    _createHome() {
        this.home = new Home();
    }


}

new App();