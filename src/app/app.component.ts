import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetApiComponent } from "./Component/get-api/get-api.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
