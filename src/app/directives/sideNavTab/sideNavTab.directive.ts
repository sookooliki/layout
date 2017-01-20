import { ISideNavCtrl, SideNavDirective } from '../sideNav/sideNav.directive';
import * as tmpl from './sideNavTab.directive.html';
import {
    IAttributes,
    IController,
    IControllerConstructor,
    IDirective,
    IDirectiveFactory,
    Injectable,
    IScope
} from 'angular';

export interface ISideNavTabCtrl extends IController {
    title: string;
    icon: string;
    isSelected: boolean;
}

interface ISideNavTabScope extends IScope {
    vm: ISideNavTabCtrl;
}

class SideNavTabCtrl implements ISideNavTabCtrl {
    public title: string;
    public isSelected: boolean;
    public icon: string;

    static factory(): Injectable<IControllerConstructor> {
        SideNavTabCtrl.$inject = [];
        return SideNavTabCtrl;
    }
}

export class SideNavTabDirective implements IDirective {
    static $$name: string = 'appSideNavTab';

    bindToController: boolean = true;
    controller: Injectable<IControllerConstructor> = SideNavTabCtrl.factory();
    controllerAs: string = 'vm'
    restrict: string = 'E';
    require: { [key: string]: string } = {
        sideNavCtrl: '^^' + SideNavDirective.$$name
    }
    scope: { [boudProperty: string]: string } = {
        title: '@tabTitle',
        icon: '@tabIcon'
    }
    template: string = tmpl.toString();
    transclude: boolean = true;

    static factory(): IDirectiveFactory {
        let directive = () => new SideNavTabDirective();
        directive.$inject = [];
        return directive;
    }

    link(
        scope: ISideNavTabScope,
        instanceElement: JQuery,
        instanceAttributes: IAttributes,
        controller: { sideNavCtrl: ISideNavCtrl }
    ): void {
        instanceElement.css({
            'display': 'none',
            'flex-direction': 'column',
            'margin': '8px'
        }).addClass('border-b');

        controller.sideNavCtrl.addTab(scope.vm);
    }
}