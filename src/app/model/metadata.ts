export interface Metadata {
    title: string,
    fields: Fields[],
    linhasResultSet?: any[],
    ie_add?: boolean,
    ie_remove?: boolean,
    ie_edit?: boolean,
    event?: string,
  };
  
  export interface Fields {
    name: string,
    text: string,
    type: string,
  };
