import ifBreak from './03-if-break.js';
import ifContinue from './03-if-continue.js';
import ifReturn from './03-if-return.js';
// import ifStatements from './03-if-statements.js'; @TODO
import ifThrow from './03-if-throw.js';
import ifsNestedBasic from "./03-ifs-nested-basic";

ifBreak('RED');
ifContinue('RED');
ifReturn('BLUE');
try { ifThrow('BLUE') } catch(e) {}
ifsNestedBasic('RED', 'GREEN');
