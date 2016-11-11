"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var token_component_1 = require("./token.component");
var TokenModule = (function () {
    function TokenModule() {
    }
    TokenModule = __decorate([
        core_1.NgModule({
            declarations: [token_component_1.TokenComponent],
            exports: [token_component_1.TokenComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TokenModule);
    return TokenModule;
}());
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map