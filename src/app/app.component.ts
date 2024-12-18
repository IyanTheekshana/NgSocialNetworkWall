import { Component } from '@angular/core';
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ToolbarComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social-network-wall';
}
