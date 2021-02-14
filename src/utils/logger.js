/**
 * Basic utilities functions to log most used level of information
 */

import { isProductionMode } from './getEnvMode';

const isProduction = isProductionMode();

export default {
    log: (...params) => {
        if (!isProduction) {
            console.log(...params);
        }
    },
    error: (...params) => {
        console.error(...params);
    },
};
