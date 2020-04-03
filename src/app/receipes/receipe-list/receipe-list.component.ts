import { Component, OnInit } from '@angular/core';

import { Receipe } from '../receipe.model'

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe('A Test Receipe', 'This is simply a image path', 
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/'
    + 'chorizo-mozarella-gnocchi-bake-cropped.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
