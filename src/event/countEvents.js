import { dom } from '../dom/dom.js';
import { handlers } from '../handler/countHandlers.js';

const { increment, decrement, reset } = dom;
const { incrementHandler, decrementHandler, resatHandler } = handlers;

export const countEvents = {
    increment: () => {
        increment.addEventListener('click', incrementHandler);
    },
    decrement: () => {
        decrement.addEventListener('click', decrementHandler);
    },
    resat: () => {
        reset.addEventListener('click', resatHandler);
    },
};
