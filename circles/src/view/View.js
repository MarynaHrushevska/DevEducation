export class View {
    constructor() {
        this.root = null;
        this.onClickCanvas = null;
        this.circles = new Map();
        this.init();
    }

    createSvgElement(elemName) {
        return document.createElementNS('http://www.w3.org/2000/svg', elemName);
    }

    init = () => {
        this.root = document.getElementById('root');
        this.root.addEventListener('click', (event) => {
            const { clientX, clientY } = event;
            const rect = this.root.getBoundingClientRect();
            const clickX = clientX - rect.x;
            const clickY = clientY - rect.y;

            this.onClickCanvas && this.onClickCanvas(clickX, clickY);
        });
    };

    drawCircle = circle => {
        const { x, y, radius, color, id } = circle;
        if (this.circles.has(id)) {
            const svg = this.circles.get(id);
            svg.style = `top: ${y}px; left: ${x}px;`;
            svg.setAttributeNS(null, 'fill', color);
        } else {
            const svg = this.createSvgElement('svg');
            svg.setAttribute('width', radius * 2);
            svg.setAttribute('height', radius * 2);
            svg.style = `top: ${y}px; left: ${x}px;`;
            svg.setAttributeNS(null, 'fill', color);

            const circleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circleSvg.setAttributeNS(null, 'r', radius);
            circleSvg.setAttributeNS(null, 'cx', radius);
            circleSvg.setAttributeNS(null, 'cy', radius);
            svg.appendChild(circleSvg);
            this.root.appendChild(svg);
            this.circles.set(id, svg);
        }
    };

    setOnClickCanvas = callback => {
        this.onClickCanvas = callback;
    };
}
