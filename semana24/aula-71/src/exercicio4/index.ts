const elementosArray = (array: any[], index: number = 0) => {
    if(index >= array.length){
        return
    }
    if(Array.isArray(array[index])){
        elementosArray(array[index])
    } else {
        console.log(array[index])
    }
    index++
    
    elementosArray(array, index)
}

elementosArray([1,[2,21,22,23],3,4,5,6])