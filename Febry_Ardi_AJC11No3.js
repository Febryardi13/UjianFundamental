function cekkoin (koin){
    var arrKoin = [25,10,5,1]
    output=0
    for(i=0;i<arrKoin.length;i++){
        if(arrKoin[0] == koin){
            output+=1
        }
    }
    for(i=0;i<arrKoin.length;i++){
        if(arrKoin[1] == koin){
            output+=1
        }
    }
    for(i=0;i<arrKoin.length;i++){
        if(arrKoin[2] == koin){
            output+=1
        }
    }
    return output++
}
console.log(cekkoin(49))