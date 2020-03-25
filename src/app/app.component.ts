import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPost {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('promise resolved');
    }, 4000);
  });

  date: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
