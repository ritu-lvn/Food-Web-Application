import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  onSubmit(person: any) {
    alert(`Name: ${person.name} Age: ${person.email}`);
  }
}



