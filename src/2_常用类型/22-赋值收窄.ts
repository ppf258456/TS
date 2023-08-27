export{}

/* 
    赋值收窄
        当我们为一个联合类型的变量赋值为一个具体的值时，TS会自动根据所赋的值对变量的类型进行收窄
*/

let x: number|string|boolean

x= 10
x="hello"
x =true
x=Math.random()>0.5?"hello":123