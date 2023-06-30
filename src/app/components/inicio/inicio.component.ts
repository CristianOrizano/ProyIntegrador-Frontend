import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements  AfterViewInit {
  showWatsonChat = true;

  ngAfterViewInit() {
 
 }
}
