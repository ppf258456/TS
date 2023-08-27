export {}

/* 
    object  表示一个对象(处理了原始值以外的任何值)
    object 所表示的对象的范围太过宽泛
所以调用object的属性或方法时，必须要进行类型检查
开发时不推荐使用object

{}使用对象字面量可以直接声明一个类型(不便于重复属性)
    语法：
    {
        属性名：类型;
        ...
        可选属性？:类型;
    }

    使用class声明对象类型
     使用class进行类型注解时，类本身也会被编译到JS文件中


     interface TS中独有的 JS不支持
        它的定义方式和CLASS相似
        不同点：interface只用来做类型注解
        无法进行创建对象，同时不会被编译到JS文件中
*/
let  obj:object ={name:'哈哈哈'}

// obj = new Date()

//类型守卫
if("name" in obj){
    console.log(obj.name);
    
}

let obj2:{name:string;age?:number}={name:"及你太美",age:21}
function sum(a:number,b:number):number{
    return a+b
}
if(typeof obj2.age ==="number"){

    sum(123,obj2.age)
}

class Person{
    name:string;
    age:number

    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
}

/* let p1:Person ={
    name:"小黑子",
    age:21
} */
interface Dog{
    name:string;
    age:number
}
let d1:Dog = {
    name:"大黄",
    age:3
}