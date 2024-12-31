import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'SnapChef';
  ingredients: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getIngredients();
  }

  getIngredients() {
    this.http.get<string[]>('http://localhost:5000/ingredients')
      .subscribe(data => this.ingredients = data);
  }

}

