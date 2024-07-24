import { Component } from '@angular/core';
import { CountComponent } from "../count/count.component";

@Component({
  selector: 'app-main-video',
  standalone: true,
  imports: [CountComponent],
  templateUrl: './main-video.component.html',
  styleUrl: './main-video.component.scss'
})
export class MainVideoComponent {
  button = 1

  cambioUno() {
    this.button = 1
  }
  cambioDos() {
    this.button = 2
  }
  cambioTres() {
    this.button = 3
  }
  cambioCuatro() {
    this.button = 4
  }
}
