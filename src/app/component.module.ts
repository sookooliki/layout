import { ContentComponent } from './components/content/content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RootComponent } from './components/root/root.component';
import { module } from 'angular';

export const moduleName = 'app.component';
export let appModule = module(moduleName, []);

appModule.component(RootComponent.$$name, new RootComponent());
appModule.component(NavbarComponent.$$name, new NavbarComponent());
appModule.component(ToolbarComponent.$$name, new ToolbarComponent());
appModule.component(ContentComponent.$$name, new ContentComponent());