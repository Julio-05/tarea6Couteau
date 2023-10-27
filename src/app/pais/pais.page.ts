import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage {
  countryName: string = '';
  universities: any[] = [];

  constructor(private http: HttpClient) {}

  buscarUniversidades() {
    if (this.countryName) {
      const country = encodeURIComponent(this.countryName);
      const apiUrl = `http://universities.hipolabs.com/search?country=${country}`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.universities = data;
      });
    }
  }
}
