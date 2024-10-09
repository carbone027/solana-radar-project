interface DataObject {
    tag: string;
    value: string | any[];  // O campo value pode ser string ou array
  }  
  
  const formatValue = (value: string): any[] => {
    return value
      .replace(/\r?\n|\r/g, '') // Remove nova linha
      .split(',')
      .map(item => item.trim())  // Remove espaços extras
      .map(item => (isNaN(Number(item)) ? item : Number(item))); // Converte para número, se aplicável
  };
  
  export const formatJson = (data: DataObject[]): DataObject[] => {
    return data.map(item => ({
      ...item,
      value: formatValue(item.value as string)  // Assegura que value é string antes de formatar
    }));
  };  
