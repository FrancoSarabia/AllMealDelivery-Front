import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './menubar.component.css'
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Menu',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Crear',
                        route: '/installation'
                    },
                    {
                        label: 'Editar',
                        route: '/configuration'
                    },
                ]
            },
            {
                label: 'Ordenes',
                icon: 'pi pi-home',
            }
        ];
    }
}
