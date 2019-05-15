import ng1 from 'angular';
import angularModules from './modules';

export class AngularApp {
    ng1App?: angular.auto.IInjectorService;

    ngModuleDependencies: any[] = [];

    constructor(private element: string | Element | JQuery | Document) { }

    private useModule(m: angular.IModule): angular.IModule {
        this.ngModuleDependencies.push(m.name);

        return m;
    }

    public init(): void {
        for(const m of angularModules) {
            this.useModule(m);
        }

        this.ng1App = ng1.bootstrap(this.element, this.ngModuleDependencies);
    }
}

export default new AngularApp(document);