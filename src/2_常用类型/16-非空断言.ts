export{}

function fn(str:string|null){
    if(typeof str === "string"){
        str.length
    }
    ;(str as string ).length

   let number= str!.length//非空断言，str不为空
   let num= str?.length // 可选链
}