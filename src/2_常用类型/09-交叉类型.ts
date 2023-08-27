export{}
/* 
    交叉类型：
        交叉类型使用&连接 要求值必须满足多种类型的要求
*/


interface Name{
    name:string
}

interface Aage{
    age:number
}

let a:Name&Aage ={
    name:'黑子铠甲',
    age:21
}