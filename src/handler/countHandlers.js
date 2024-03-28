import { domManipulation } from '../components/domManipulation.js';
import { data } from '../data/data.js';

export const handlers = {
    incrementHandler: () => {
        data.counter++;
        domManipulation(data.counter);
    },
    decrementHandler: () => {
        data.counter--;
        domManipulation(data.counter);
    },
    resatHandler: () => {
        data.counter = 0;
        domManipulation(data.counter);
    },
};
