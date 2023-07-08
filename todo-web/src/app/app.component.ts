import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
