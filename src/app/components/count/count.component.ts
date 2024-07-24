import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {
  countdownD = '';
  countdownH = '';
  countdownM = '';
  countdownS = '';

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    setInterval(() => {
      const now = moment();
      const end = moment('2024-12-31 00:00:00');

      const duration = moment.duration(end.diff(now));
      const months = duration.asMonths();
      const days = duration.days() + Math.floor(months * 30.44); // Aproximación de días por mes

      this.countdownD = `${days}`;
      this.countdownH = `${duration.hours()}`;
      this.countdownM = `${duration.minutes()}`;
      this.countdownS = `${duration.seconds()}`;
    }, 1000);
  }
}
