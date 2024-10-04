import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuPageComponent } from './pages/menu/menu-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DropdownDishComponent } from './components/dropdown-dish/dropdown-dish.component';

@NgModule({
  declarations: [
    MenuPageComponent,
    DropdownDishComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class MenuModule { }
