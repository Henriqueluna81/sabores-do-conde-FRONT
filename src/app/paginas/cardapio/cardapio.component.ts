import { Component } from '@angular/core';
import { FoodService } from '../../../food.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {
  foodImageUrl = ''; // Inicialize com uma string vazia

  constructor(private foodService: FoodService) { }
  
  ngOnInit() {
    this.foodService.getRandomFood().subscribe((response: any) => {
      this.foodImageUrl = response.recipes[0].image;
    });
  }

}
