import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angular-routing';
}
