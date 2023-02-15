"use strict";
/* tslint:disable: no-unused-expression max-classes-per-file*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_ioc_1 = require("container-ioc");
var TService = Symbol('IService');
var TManager = Symbol('IManager');
var App = /** @class */ (function () {
    function App(service) {
        this.service = service;
    }
    App = __decorate([
        (0, container_ioc_1.Injectable)(),
        __param(0, (0, container_ioc_1.Inject)(TService))
    ], App);
    return App;
}());
var Service = /** @class */ (function () {
    function Service() {
    }
    Service = __decorate([
        (0, container_ioc_1.Injectable)()
    ], Service);
    return Service;
}());
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager = __decorate([
        (0, container_ioc_1.Injectable)()
    ], Manager);
    return Manager;
}());
var container = new container_ioc_1.Container();
container.register([
    { token: App, useClass: App },
    { token: TManager, useClass: Manager },
    {
        token: TService,
        useFactory: function (manager) {
            return manager;
        },
        inject: [TManager]
    }
]);
var app = container.resolve(App);
//# sourceMappingURL=use-factory-with-injections.js.map