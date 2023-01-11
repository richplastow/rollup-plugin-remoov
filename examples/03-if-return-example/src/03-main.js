import ifBreak from './03-if-break.js';
import ifContinue from './03-if-continue.js';
import ifReturn from './03-if-return.js';
import ifThrow from './03-if-throw.js';

ifBreak('RED');
ifContinue('RED');
ifReturn('BLUE');
try { ifThrow('BLUE') } catch(e) {}
