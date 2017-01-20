import { SideNavTabDirective } from './directives/sideNavTab/sideNavTab.directive';
import { SideNavDirective } from './directives/sideNav/sideNav.directive';
import { module } from 'angular';

export const moduleName = 'app.directive';
export let appModule = module(moduleName, []);

appModule.directive(SideNavDirective.$$name, SideNavDirective.factory());
appModule.directive(SideNavTabDirective.$$name, SideNavTabDirective.factory());