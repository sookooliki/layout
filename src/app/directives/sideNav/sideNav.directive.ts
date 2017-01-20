import { ISideNavTabCtrl } from '../sideNavTab/sideNavTab.directive';
import * as tmpl from './sideNav.directive.html';
import {
    IAttributes,
    IController,
    IControllerConstructor,
    IDirective,
    IDirectiveFactory,
    Injectable,
    IScope,
    ITranscludeFunction
} from 'angular';

interface ISideNavScope extends IScope {
    vm: ISideNavCtrl
}

export interface ISideNavCtrl extends IController {
    tabs: ISideNavTabCtrl[];
    addTab(tab: ISideNavTabCtrl): void;
}

class SideNavCtrl implements ISideNavCtrl {
    tabs: ISideNavTabCtrl[] = [];

    constructor(private _$scope: ISideNavScope) { }

    static factory(): Injectable<IControllerConstructor> {
        SideNavCtrl.$inject = [
            '$scope'
        ];
        return SideNavCtrl;
    }

    addTab(tab: ISideNavTabCtrl): void {
        this.tabs.push(tab);
    }

    selectTab(tab: ISideNavTabCtrl): void {
        tab.isSelected = !tab.isSelected;
        this._$scope.$emit('selectionChange', tab, this.tabs);
    }
}

export class SideNavDirective implements IDirective {
    static $$name = 'appSideNav'

    bindToController: true;
    controller: Injectable<IControllerConstructor> = SideNavCtrl.factory();
    controllerAs: string = 'vm';
    restrict: string = 'E';
    scope: { [boundProperty: string]: string } = {}
    template: string = tmpl.toString()
    transclude: { [slot: string]: string } = {
        tabs: SideNavDirective.$$name + 'Tabs',
        content: SideNavDirective.$$name + 'Content'
    };

    static factory(): IDirectiveFactory {
        var directive = () => new SideNavDirective();
        directive.$inject = [];
        return directive;
    }

    link(
        scope: ISideNavScope,
        instanceElement: JQuery,
        instanceAttributes: IAttributes,
        controller: IController | IController[] | { [key: string]: string },
        transclude: ITranscludeFunction
    ): void {
        instanceElement.css({
            'display': 'flex',
            'flex-direction': 'row'
        });

        let tabsContainer = instanceElement.children('#tabs-container').first().css({
            'display': 'flex',
            'flex-direction': 'column'
        });

        let contentContainer = instanceElement.children('#content-container');

        let tabsDivs: JQuery;

        transclude((clonedElement?: JQuery, scope?: IScope) => {
            clonedElement.css({
                'display': 'flex',
                'flex-direction': 'column'
            });
            tabsContainer.append(clonedElement);
            tabsDivs = clonedElement.children();
        }, null, 'tabs');

        transclude((clonedElement?: JQuery, scope?: IScope) => {
            contentContainer.append(clonedElement);
        }, null, 'content');

        scope.$on('selectionChange', (event, ...args) => {
            event.stopPropagation();
            let tab = args[0] as ISideNavTabCtrl;
            let tabs = args[1] as ISideNavTabCtrl[];
            let index = tabs.indexOf(tab);
            if (tab.isSelected) {
                tabsDivs.eq(index).css({
                    'display': 'flex'
                });
            } else {
                tabsDivs.eq(index).css({
                    'display': 'none'
                });
            }
        });
    }
}
