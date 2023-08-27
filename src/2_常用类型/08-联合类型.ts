export{}
/* 
    联合类型
        联合类型允许某个值可以时多种类型中的一种
        使用联合类型时，只能访问共用的属性和方法
        如果想访问某个类型独有的属性和方法，使用类型守卫或类型的断言
*/

let a: string|number|boolean

a='hello',
a =123,
a=true

interface Person {
    name:string 
    age:number
}
interface Dog{
    age:number
}
let someOne :Person|Dog ={
    name:'黑子铠甲',
    age:21
}
/* someOne={
    age:3
} */

function fn(PersonorDog:Person|Dog){
    if("name" in PersonorDog){
       console.log(PersonorDog.name);
    }
console.log((PersonorDog as Person).name);

}
fn(someOne)