import * as tmpl from "./navbar.component.html";
import { IComponentOptions, IComponentController, Injectable, IControllerConstructor } from "angular";

class NavbarComponentCtrl implements IComponentController {
    static factory(): Injectable<IControllerConstructor> {
        NavbarComponentCtrl.$inject = [];
        return NavbarComponentCtrl;
    }
}

export class NavbarComponent implements IComponentOptions {
    static $$name: string = "appNavbar";
    controller: Injectable<IControllerConstructor> = NavbarComponentCtrl.factory();
    controllerAs: string = "vm";
    template: string = tmpl.toString();
}