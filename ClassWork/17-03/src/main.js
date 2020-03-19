import ourArr from './array.js';
import { getMaxArrayEl, sortRule } from './getMaxArrayEl.js';
import './style.css';

// import * as getResult from './getMaxArrayEl';

// getResult.getMaxArrayEl;
// getResult.sortRule;

const result = getMaxArrayEl(ourArr, sortRule);
console.log(result);
