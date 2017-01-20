import './root.component.scss';
import * as tmpl from './root.component.html';
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from 'angular';

class RootComponentCtrl implements IComponentController {
    static factory(): Injectable<IControllerConstructor> {
        RootComponentCtrl.$inject = [];
        return RootComponentCtrl;
    }
}

export class RootComponent implements IComponentOptions {
    static $$name: string = "appRoot";
    controller: Injectable<IControllerConstructor> = RootComponentCtrl.factory();
    controllerAs: string = "vm";
    template: string = tmpl.toString();
}