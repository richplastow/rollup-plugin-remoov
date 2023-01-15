import ClassMethodInstance from './05-class-method-instance.js';
import ClassMethodStatic from './05-class-method-static.js';
import {
    functionArrowBlockCalled,
    functionArrowNoBlockCalled,
} from './05-function-arrow.js';
import { functionClassicCalled } from './05-function-classic.js';
import objectMethod from './05-object-method.js';

const doCallSecond = false;

const instance = new ClassMethodInstance();
instance.classMethodInstanceArrowBlockCalled(doCallSecond);
instance.classMethodInstanceArrowNoBlockCalled(doCallSecond);
instance.classMethodInstanceClassicCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticClassicCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.objectMethodArrowBlockCalled(doCallSecond);
objectMethod.objectMethodArrowNoBlockCalled(doCallSecond);
objectMethod.objectMethodClassicCalled(doCallSecond);

//@TODO anon functions, eg iifes
//@TODO anon function variables, eg `const noop = function () {}`
