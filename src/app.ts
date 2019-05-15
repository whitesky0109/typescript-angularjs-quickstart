import ng1 from 'angular';
import angularModules from './modules';

export class AngularApp {
    ng1App?: angular.IModule;

    ngModuleDependencies: any[];

    constructor() {
        this.ngModuleDependencies = [];
    }

    useModule(m: angular.IModule) {
        this.ngModuleDependencies.push(m.name);

        return m;
    }

    init():void {
        for(const m of angularModules) {
            this.useModule(m);
        }

        ng1.bootstrap(document, this.ngModuleDependencies);
    }
}

export default new AngularApp();