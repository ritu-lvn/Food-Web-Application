import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  result;

  constructor(private httpObj: HttpClient) {
  }
  SignUp (a, b){
    let obj = {'name': 'a', 'Job': 'b'};
    let url = 'https://reqres.in/api/users?page=2';
    this.httpObj.post(url, obj). subscribe((response) => {
      console.log(response);
      this.result = response;
    })


} 
  
}