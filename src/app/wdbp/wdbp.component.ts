import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Metadata } from '../model/metadata';
import { WdbpService } from '../services/wdbp.service';
import { WdbpGridComponent } from './wdbp-grid/wdbp-grid.component';
import { WdbpDetailComponent } from './wdbp-detail/wdbp-detail.component';

@Component({
  selector: 'app-wdbp',
  standalone: true,
  imports: [WdbpGridComponent, WdbpDetailComponent],
  templateUrl: './wdbp.component.html',
  styleUrl: './wdbp.component.scss'
})
export class WdbpComponent implements OnInit, AfterContentInit {
  
  //Obtido através das anotaçoes @Controller das classes.
  @Input() functionName: string = '';
  @Input() objectCode: number = 0;

  service: WdbpService = new WdbpService();
  metadata?: Metadata;
  detailMode: boolean = false;

  constructor() {
    //evento onLoad
  }

  ngOnInit(): void {
      //evento onReady
    this.metadata = this.service.obterMetadata(this.functionName, this.objectCode);
  }

  ngAfterContentInit(): void {
      //evento onAfterContentInit
      //evento onBeforeLoadRecords
      //evento onLoad
      //evento onAfterLoadRecords
  }

  onPerformNew() {
    this.detailMode = true;
    //evento onBeforePerforn
    //evento onPerform('NEW_ITEM')
    //evento onAfterPerform
  }

  onPerformSave() {
    this.validate();
    //evento onBeforePerforn
    //evento onPerform('INSERT') //or UPDATE
    //evento onPerformSave
    //evento onAfterPerform
  }

  onCancel() {
    this.detailMode = false;
    //evento onPerformCancel
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

  isDetail(): boolean {
    return this.detailMode;
  }
}
