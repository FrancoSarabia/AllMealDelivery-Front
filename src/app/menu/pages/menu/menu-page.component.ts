import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MenuService } from '../../services/menu.service';
import { MessageService } from 'primeng/api';
import { DishType } from '../../interfaces/dish-type.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent implements OnInit {
  
  
  dichTypes: DishType[] = [];

  menu = {
    name: '',
    description: '',
  };

  menuDishes = [
    { dish_id: 0, quantity: 1 }
  ];

  constructor(
    private menuService: MenuService, 
    private messageService: MessageService,
    private http: HttpClient
  
  ) { }

  ngOnInit(): void {
    this.getDishTypes()
  }

  getDishTypes() {
    this.http.get<any[]>('http://localhost:8000/menu/dishtypes/').subscribe(data => {
      this.dichTypes = data.map(dishType => ({_id: dishType._id, name: dishType.name}));
    });
  }

  // Agregar un plato
  addDish() {
    this.menuDishes.push({ dish_id: 0, quantity: 1 });
  }

  // Eliminar un plato
  removeDish(index: number) {
    this.menuDishes.splice(index, 1);
  }

  // Enviar el menú al backend
  submitMenu() {
    const menuData = {
      name: this.menu.name,
      description: this.menu.description,
      menu_dishes: this.menuDishes
    };

    this.menuService.createMenu(menuData).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Menú creado correctamente' });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema al crear el menú' });
      }
    );
  }
}
