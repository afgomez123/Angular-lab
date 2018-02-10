import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // titulo de la aplicaciòn
  title = 'Ingresar nombre y presione enter:   ';
  response: any = undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  getNameGender(name) {
    this.http.get('https://api.genderize.io/?name=' + name).subscribe((res) => {
      this.response = res;
    });
  }

  getName(event) {
    let name = event.target.value;
      if(name){
      this.getNameGender(name)
    }
}
}




