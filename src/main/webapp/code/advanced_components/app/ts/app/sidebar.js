System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, router_1;
    var SidebarItemComponent, SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            /*
             * SidebarItemComponent
             *
             * Defines a single item in the sidebar. Links to the designated component and
             * marks the current item as active.
             *
             */
            SidebarItemComponent = (function () {
                function SidebarItemComponent(router) {
                    this.router = router;
                }
                // Checks if this current example is the selected one
                SidebarItemComponent.prototype.isActive = function () {
                    return this.isRouteActive(this.item.name);
                };
                // Here's how you determine if a current route is active in ng2
                SidebarItemComponent.prototype.isRouteActive = function (route) {
                    return this.router.isRouteActive(this.router.generate([route]));
                };
                __decorate([
                    core_1.Input('item')
                ], SidebarItemComponent.prototype, "item", void 0);
                SidebarItemComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar-item',
                        inputs: ['item'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n<a class=\"item\" \n  [ngClass]=\"{ active: isActive() }\"\n  [routerLink]=\"[item.name]\">\n  {{ item.label }}\n</a>\n  "
                    })
                ], SidebarItemComponent);
                return SidebarItemComponent;
            }());
            /*
             * SidebarComponent
             *
             * Given a list of ExampleDefs, creates a sidebar for those items.
             *
             */
            SidebarComponent = (function () {
                function SidebarComponent() {
                }
                __decorate([
                    core_1.Input('items')
                ], SidebarComponent.prototype, "items", void 0);
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar',
                        inputs: ['items'],
                        directives: [SidebarItemComponent],
                        template: "\n<div class=\"ui vertical pointing menu\">\n  <sidebar-item \n    [item]=\"item\"\n    *ngFor=\"#item of items\">\n    </sidebar-item>\n</div>\n  "
                    })
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
//# sourceMappingURL=sidebar.js.map