
export const headers = (file: string) => {
    'use strict';
    const excelToJson = require('convert-excel-to-json');
    const result = excelToJson({
        sourceFile: 'Pokemon Go.xlsx',
        header:{
            rows: 0
        },
        sheets: ['sheet1']
    });
    return result
}



