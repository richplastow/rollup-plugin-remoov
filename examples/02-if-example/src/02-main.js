import ifBreak from './02-if-break.js';
import ifContinue from './02-if-continue.js';
import { ifElseWithBlocks, ifElseWithoutBlocks } from './02-if-else.js';
import ifNested from "./02-if-nested.js";
import ifReturn from './02-if-return.js';
// import ifStatements from './02-if-statements.js'; @TODO
import ifThrow from './02-if-throw.js';

function ifElse(redBlue) {
    ifElseWithBlocks(redBlue);
    ifElseWithoutBlocks(redBlue);
}

ifBreak('RED');
ifContinue('RED');
ifElse('RED');
ifNested('RED', 'GREEN');
ifReturn('BLUE');
try { ifThrow('BLUE') } catch(e) {}
