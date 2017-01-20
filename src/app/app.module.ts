import '../style/main.scss';
import 'expose?jQuery!jquery';
import 'bootstrap';
import { module } from 'angular';
import * as componentModule from './component.module';
import * as directiveModule from './directive.module';

export let appModule = module('app', [
    componentModule.moduleName,
    directiveModule.moduleName
]);