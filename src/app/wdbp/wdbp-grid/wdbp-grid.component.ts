import { Component, Input } from '@angular/core';
import { Metadata } from '../../model/metadata';

@Component({
  selector: 'app-wdbp-grid',
  standalone: true,
  imports: [],
  templateUrl: './wdbp-grid.component.html',
  styleUrl: './wdbp-grid.component.scss'
})
export class WdbpGridComponent {

  @Input() metadata?: Metadata;

  getValue(item:any, column:string): string | boolean {
    return item[column];
  }
}
