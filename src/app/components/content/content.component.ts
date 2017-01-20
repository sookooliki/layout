import './content.component.scss';
import * as tmpl from './content.component.html';
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from 'angular';
class ContentComponentCtrl implements IComponentController {
    static factory(): Injectable<IControllerConstructor> {
        ContentComponentCtrl.$inject = [];
        return ContentComponentCtrl;
    }
}

export class ContentComponent implements IComponentOptions {
    static $$name: string = 'appContent';
    controller: Injectable<IControllerConstructor> = ContentComponentCtrl.factory();
    controllerAs: string = 'vm';
    template: string = tmpl.toString();
}