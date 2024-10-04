import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuPageComponent } from "./pages/menu/menu-page.component";

const routes: Routes = [
    {
        path: '',
        component: MenuPageComponent
    },
    {
        path: '*',
        redirectTo: ''
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [

    ]
})
export class MenuRoutingModule { }