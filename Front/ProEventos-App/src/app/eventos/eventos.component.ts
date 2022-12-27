import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.getEventos()
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error),
    )
  }
}
