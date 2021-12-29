import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharereview';
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
