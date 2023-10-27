import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  public name: string = '';
  public age: number = 0;
  public message: string = '';

  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  generar() {
    this._http.get<any>('https://api.agify.io/?name=' + this.name).subscribe((res) => {
      this.age = res.age;

      if (this.age < 18) {
        this.message = 'Joven';
      } else if (this.age >= 18 && this.age < 60) {
        this.message = 'Adulto';
      } else {
        this.message = 'Anciano';
      }
    });
  }
}
