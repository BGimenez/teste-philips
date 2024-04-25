import { Component, Input, OnInit } from '@angular/core';
import { Metadata } from '../../model/metadata';

@Component({
  selector: 'app-wdbp-detail',
  standalone: true,
  imports: [],
  templateUrl: './wdbp-detail.component.html',
  styleUrl: './wdbp-detail.component.scss'
})
export class WdbpDetailComponent implements OnInit {

  @Input() metadata?: Metadata;

  constructor() {
    //evento onLoad
  }
  
  ngOnInit(): void {
    //evento onOpenDetail
  }
  
  
}
