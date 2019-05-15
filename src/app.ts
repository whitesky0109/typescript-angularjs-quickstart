import ng1 from 'angular';

export class AngularApp {
    ng1App?: angular.IModule;

    constructor() {
        this.ng1App = ng1.module('app', []);
        ng1.bootstrap(document, ['app']);
    }

    getApp(): angular.IModule{
        return this.ng1App;
    }
}

const App: AngularApp = new AngularApp();

export const coreModule: angular.IModule = App.getApp();

export default App;