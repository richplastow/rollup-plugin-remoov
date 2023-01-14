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
instance.methodArrowBlockCalled(doCallSecond);
instance.methodArrowNoBlockCalled(doCallSecond);
instance.methodClassicCalled(doCallSecond);
ClassMethodStatic.methodArrowBlockCalled(doCallSecond);
ClassMethodStatic.methodArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.methodClassicCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.methodArrowBlockCalled(doCallSecond);
objectMethod.methodArrowNoBlockCalled(doCallSecond);
objectMethod.methodClassicCalled(doCallSecond);
