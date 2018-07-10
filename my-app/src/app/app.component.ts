import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector is the custom element used to call the component (app html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'my-app';
}
