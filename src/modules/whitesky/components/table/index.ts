import angular from 'angular';
import coreModule from '../../module';

export class TableCtrl implements angular.IComponentController {

    /** @ngInject */
    constructor($scope: angular.IScope) {
        console.log($scope);
    }
}

export class TableComponent implements angular.IComponentOptions {
    template = require('./index.html');
    controller = TableCtrl;

    /** @ngInject */
    constructor() {
    }
}

coreModule.component('whiteskyTable', new TableComponent());
