import { Component } from '@angular/core';
import { WdbpComponent } from '../wdbp/wdbp.component';

@Component({
  selector: 'app-person-wdbp',
  standalone: true,
  imports: [WdbpComponent],
  templateUrl: './person-wdbp.component.html',
  styleUrl: './person-wdbp.component.scss'
})
export class PersonWdbpComponent {
    functionName: string = 'corsis';
    objectCode: number = 12345;
}
