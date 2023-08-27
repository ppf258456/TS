export{}

/* 
    为类型起的别名，使用type关键字来创建
    注意：类型别名不可重复
    即存储的是类型而不是具体的值
*/

type str =string
let a :str

type snb = string |number |boolean
let  b :snb

interface Name{
    name:string
}

interface Aage{
    age:number
}

type Person = Name & Aage