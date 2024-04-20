import { Injectable } from '@angular/core';
import { Fields, Metadata } from '../model/metadata';

@Injectable({
  providedIn: 'root'
})
export class WdbpService {

  ELEMENT_DATA: any[] = [
    {id: 1, name: 'Bruno', lastName: 'A'},
    {id: 2, name: 'Joao', lastName: 'B'},
    {id: 3, name: 'Carla', lastName: 'C'},
    {id: 4, name: 'Mateus', lastName: 'D'},
    {id: 5, name: 'Maria', lastName: 'E'},
    {id: 6, name: 'Pedro', lastName: 'F'},
    {id: 7, name: 'Paulo', lastName: 'G'},
  ];
  
  COLUMN_DATA: Fields[] = [
    {name: 'id', text: 'ID', type: 'number'}, 
    {name: 'name', text: 'Name', type: 'string'},
    {name: 'lastName', text: 'Last Name', type: 'string'}
  ];
  
  METADATA_DATA: Metadata = {
    title: 'Pessoa Física',
    fields: [...this.COLUMN_DATA],
    linhasResultSet: [...this.ELEMENT_DATA],
  }

  constructor() { }

  
  obterMetadata(): Metadata {
    return this.METADATA_DATA;
  }
}
