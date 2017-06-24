"use strict";
var router_1 = require("@angular/router");
var login_1 = require("./module/login/component/login");
var work_1 = require("./module/work/component/work");
var appRoutes = [
    { path: '', component: work_1.WorkComponent, pathMatch: 'full' },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'workspace', component: work_1.WorkComponent }
];
exports.mainRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map