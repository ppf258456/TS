export{}
/* 
    any
        表示任意值
        当我们为一个变量设置any后，它可以接手任何值
        同时它也可赋值给任意类型的变量
        当我们为一个变量设置any类型后，那么它将跳过所有的TS检查
        可以对它调用任意的属性和方法，这可能会导致运行时异常的概率大大增加
        基于以上特点，在开发中尽量不要使用any
*/
let a :any
a = 123
a = true 
a = [1,2,3]

let b:number = a

let c  // 声明变量，无注解无赋值 ，会被推断为any


function sum(a:number,b:number):number{
    return a + b
}