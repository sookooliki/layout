import './toolbar.component.scss';
import * as tmpl from './toolbar.component.html';
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from 'angular';

class ToolbarComponentCtrl implements IComponentController {
    static factory(): Injectable<IControllerConstructor> {
        ToolbarComponentCtrl.$inject = [];
        return ToolbarComponentCtrl;
    }
}

export class ToolbarComponent implements IComponentOptions {
    static $$name: string = 'appToolbar';
    controller: Injectable<IControllerConstructor> = ToolbarComponentCtrl.factory();
    controllerAs: string = 'vm';
    template: string = tmpl.toString();
}