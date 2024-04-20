import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Metadata } from '../model/metadata';
import { WdbpService } from '../services/wdbp.service';

@Component({
  selector: 'app-wdbp',
  standalone: true,
  imports: [],
  templateUrl: './wdbp.component.html',
  styleUrl: './wdbp.component.scss'
})
export class WdbpComponent implements OnInit, AfterContentInit{
  
  service: WdbpService = new WdbpService();
  metadata?: Metadata;

  constructor() {
    //evento onLoad
  }

  ngOnInit(): void {
      //evento onReady
    this.metadata = this.service.obterMetadata();
  }

  ngAfterContentInit(): void {
      //evento onAfterContentInit
      //evento onBeforeLoadRecords
      //evento onLoad
      //evento onAfterLoadRecords
  }

  getValue(item:any, column:string): string | boolean {
    return item[column];
  }

  onPerform() {
    this.validate();
    //evento onBeforePerforn
    //evento onPerform('NEW_ITEM')
    //evento onPerformSave
    //evento onAfterPerform
  }

  onRemove() {
    //evento onBeforePerforn
    //evento onPerform('DELETE')
    //evento onAfterPerform
  }

  onOpenDetail() {
    //evento onOpenDetail
  }

  validate(): void {
    console.log('Validando...');
  }
}
