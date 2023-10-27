import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: 'genero.page.html',
  styleUrls: ['genero.page.scss']
})
export class GeneroPage implements OnInit {
  public name: string = '';
  public genero: string = '';

  constructor(private _http: HttpClient, private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  generar() {
    this._http.get<any>('https://api.genderize.io/?name=' + this.name).subscribe(res => {
      this.genero = res.gender;
      this._changeDetectorRef.detectChanges();
    });
  }
}
