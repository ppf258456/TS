export{}

/* 
    函数的类型注解
        1 使用function
            开发时几乎不用，因为它的限定范围过于宽泛，使用意义不大
        2 函数类型表达式
            语法：(参数列表) =>返回值
        3 使用调用签名
            适用于更复杂的函数
            调用签名需要在对象火接口中使用，使用后即表示该类型是一个可调用的类型（函数）
*/

let fn:Function
fn = function(){}
fn = (a:string) =>{
    return 123
}
let fn2 : (str:string)=> string 
fn2 =(str:string)=>"hello"


type myFunction =(str:string)=> string

let fn3: myFunction

//可调用的对象（函数）
type myFn2 ={
    (a:number,b:string):number
}

interface myFn3{
    (a:string,b:string):string
}


let sum :myFn2 = function(a:number,b:string){
    return a
}

let getStr :myFn3= (a:string,b:string)=> a+b