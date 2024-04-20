import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WdbpComponent } from './wdbp/wdbp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, WdbpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'framework';
}
