export{}
/* 
    unknow
    未知类型
    它的作用和any相似，可以为一个unknown类型的变量赋值任意类型
        但却不能任意使用unknown类型
    要使用unknow 类型的变量，需要结合类型断言或类型守卫
*/

let a:unknown
a=123
a='string'
a=[1.2,3,4];
(a as number[]).length
console.log((<number[]>a).length);

a='hello'
if(typeof a === 'string'){
    a.toUpperCase()
}
