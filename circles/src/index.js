import { View } from './view';
import { Controller } from './controller';

import './styles/style.scss';
import {Physics} from "./Physics";

const init = () => {
    const view = new View();
    const physics = new Physics();
    const controller = new Controller(view, physics);

    controller.play();
};

init();

