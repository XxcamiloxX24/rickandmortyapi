import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'rickandmortyAPI'
  handleSearch(value: string){
    console.log(value)
  }
  constructor(
    private _http:HttpClient
  ){ }
  ngOnInit(): void {}

}
