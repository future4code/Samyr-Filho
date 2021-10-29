
export class Function {
    dateStrToDate(dateStr: string) : Date {
        
        const dateConvStr = dateStr.split('/').reverse().join('-');
        const dateConv = Date.parse(dateConvStr)

        return new Date(dateConv)
    }
}

 