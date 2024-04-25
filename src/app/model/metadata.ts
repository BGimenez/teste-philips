export interface Metadata {
    title: string,
    gridFields: Fields[],
    formFields: Fields[],
    linhasResultSet?: any[],
    ie_add?: boolean,
    ie_remove?: boolean,
    ie_edit?: boolean,
    event?: string,
  };
  
  export interface Fields {
    name: string,
    text?: string,
    type?: string,
    label?: string,
    componentType?: string,
    children?: Fields[],
    value?: string,
    order?: number,
    default?: boolean,
  };
