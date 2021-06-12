import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  jwt =localStorage.getItem('jwt')
  onNavigate(){
    // @ts-ignore
    this.document.location.href("http://www.google.com")
  }

}




