import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  public provincias: any[] = [
    { name: 'Santo Domingo', lat: '18.4719', lon: '-69.8923' },
    { name: 'Santiago', lat: '19.4517', lon: '-70.6970' },
    { name: 'La Romana', lat: '18.4273', lon: '-68.9720' },
  ];

  public climas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerClimaActual();
  }

  obtenerClimaActual() {
    const apiKey = '938fa4ac9fefde150772b5b359acdd4b';

    this.provincias.forEach((provincia) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${provincia.lat}&lon=${provincia.lon}&appid=${apiKey}&units=metric`;

      this.http.get(apiUrl).subscribe((data: any) => {
        const climaProvincia = {
          nombre: provincia.name,
          temperatura: data.main.temp,
          humedad: data.main.humidity,
          descripcion: data.weather[0].description,
        };

        this.climas.push(climaProvincia);
      });
    });
  }
}
