function makeSvg(file, classname){
    const element = document.createElement('object');
    element.type = 'image/svg+xml';
    element.data = file;

    element.className = `svg ${classname}`;

    return element;
}

export class App {
    constructor() {
        this.UIWrapper = document.createElement('div');
        this.UIWrapper.id = 'uiContainer';

        this.button = makeSvg('props/uiFrame.svg', 'uiFrame');
        this.buttonIcon = makeSvg('props/github.svg', 'icon');

        window.addEventListener('mousemove', this.mousemove.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        document.body.appendChild(this.UIWrapper);
        this.UIWrapper.appendChild(this.button);
        this.UIWrapper.appendChild(this.buttonIcon);
    }

    mousemove(e){
        const pageX = e.pageX;
        const pageY = e.pageY;

        const rotateX = ((pageX / this.stageWidth) - 0.5) * 150;
        const rotateY = -((pageY / this.stageHeight) - 0.5) * 150;

        this.UIWrapper.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        this.buttonIcon.style.transform = `translateZ(15px)`
    }

    resize(e) {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.stageCenterX = this.stageWidth / 2;
        this.stageCenterY = this.stageHeight / 2;
    }
}

window.onload = () => {
    new App();
};