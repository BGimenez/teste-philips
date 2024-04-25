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
  
  GRID_COLUMNS: Fields[] = [
    {name: 'id', text: 'ID', type: 'number'}, 
    {name: 'name', text: 'Name', type: 'string'},
    {name: 'lastName', text: 'Last Name', type: 'string'}
  ];
  
  FORM_FIELDS: Fields[] = [
    {name: 'id', label: 'ID', type: 'number', componentType: 'INPUT'}, 
    {name: 'name', label: 'Name', type: 'text', componentType: 'INPUT'},
    {name: 'lastName', label: 'Last Name', type: 'text', componentType: 'INPUT'},
    {name: 'gender', label: 'Gender', type: 'text', componentType: 'RADIO', children: [{name: 'masculino', label: 'Masculino', order: 1, default: true}, {name: 'masculino', label: 'Feminino', order: 2}, {name: 'masculino', label: 'Outros', order: 3}]},
    {name: 'state', label: 'State', type: 'text', componentType: 'COMBOBOX', children: [{name: 'sp', label: 'São Paulo', value: 'SP', order: 1, default: true}, {name: 'sc', label: 'Santa Catarina', value: 'SC', order: 2}, {name: 'pr', label: 'Paraná', value: 'PR', order: 3}]},
    {name: 'city', label: 'City', type: 'number', componentType: 'LOCATOR'},
  ];
  
  METADATA_DATA: Metadata = {
    title: 'Pessoa Física',
    gridFields: [...this.GRID_COLUMNS],
    formFields: [...this.FORM_FIELDS],
    linhasResultSet: [...this.ELEMENT_DATA],
  }

  constructor() { }

  
  obterMetadata(functionName: string, objectCode: string): Metadata {
    return this.METADATA_DATA;
  }
}
