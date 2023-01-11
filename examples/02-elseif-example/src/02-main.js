import {
    ifElseIfElseWithBlocks,
    ifElseIfElseWithoutBlocks
} from './02-helpers.js';

function basicExample(redBlue) {
    ifElseIfElseWithBlocks(redBlue);
    ifElseIfElseWithoutBlocks(redBlue);
}

basicExample('RED');
