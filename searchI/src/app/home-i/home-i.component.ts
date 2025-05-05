import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-home-i',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-i.component.html',
  styleUrl: './home-i.component.scss'
})
export class HomeIComponent {
    query:string = '';
    images: any[] = [];
    errorMessage: string = '';

    constructor() {}

    ngOnInit(): void {}

    searchImages(): void {
      if(!this.query) {
        this.errorMessage = 'Please enter a search term.';
        return;
      }
      axios.get(`http://localhost:9676/search?query=${this.query}`)
        .then( (response) =>{
          this.images = response.data;
          this.errorMessage = '';
        })
        .catch( (error) => {
          console.log(error);
          this.errorMessage = 'An error occurred while searching for images.';
        });
    }
      
}
