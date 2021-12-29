import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Article by Jeetendra';
  posts : any;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    console.log("Calling service");
    this.dataService.getPosts().subscribe(
    (response) => { this.posts = response; 
    console.log(response)},
    (error) => { console.log(error); });
  }

}
