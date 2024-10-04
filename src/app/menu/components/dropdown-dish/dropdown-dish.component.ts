import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dish } from '../../interfaces/dish.interface';
import { DishType } from '../../interfaces/dish-type.interface';

@Component({
  selector: 'app-dropdown-dish',
  templateUrl: './dropdown-dish.component.html',
  styleUrl: './dropdown-dish.component.css'
})
export class DropdownDishComponent implements OnInit {
  @Output()
  dish: string = '';

  @Input()
  dishType!: DishType;

  dishes: Dish[] = [];
  nombreMenu: string = '';
  descripcionMenu: string = '';

  selectedDish: any;  // El plato seleccionado en el dropdown
  selectedDishes: any[] = []; // Lista de platos seleccionados para el menú

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes() {
    this.http.get<any[]>('http://localhost:8000/menu/dishes/').subscribe(data => {
      console.log(data)
      this.dishes = data.map(dish => ({ _id: dish._id, name: dish.name }));
    });
  }

  // Método para agregar un plato al menú
  addDish() {

    console.log(this.dishes)
    if (this.selectedDish && !this.selectedDishes.includes(this.selectedDish)) {
      this.selectedDishes.push({
        "dish_id": this.selectedDish,
        "name": this.dishes.filter(dish => dish.name = this.selectedDish)
      });
    }
  }

  // Método para eliminar un plato de la lista de seleccionados
  deleteDish(plato: any) {
    this.selectedDishes = this.selectedDishes.filter(p => p !== plato);
  }
}
