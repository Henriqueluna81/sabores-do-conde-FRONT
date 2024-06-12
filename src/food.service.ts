import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiKey = 'api_key = live_ fYzEVlDQoKOcDAO4f1iZQjFaIG8VXU BgpnfDBU2Alf22yld1gVeHkgPuIy9T lAd5';
  // private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';

  constructor(private http: HttpClient) { }
  getRandomFood() {
    return this.http.get(`${this.apiUrl}`);
  }
}
