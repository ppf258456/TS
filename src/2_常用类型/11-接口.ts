export{}
/* 
    接口 interface
        接口和类的作用很像，接口是用来定义对象的结构的，而类是用来创建对象
        定义接口后，在编译后的JS文件中是看不到接口的
        可以在接口中定义一个对象中含有哪些方法和属性
        定义接口时，无需关心属性和方法的具体实现
        属性修饰符：
            ? 可选属性
            属性名?:类型
            readonly 只读属性
            readonly 属性名 ：类型

            方法：
            方法名():返回值

            implements:接口除了可以限制对象外，也可用来限制类的定义
                通过让一个类来实现某个接口，来对该类进行限制
                类去实现接口时，必须包含接口中所有的属性

            

             extends: 接口自身也可以继承接口
*/


/* interface Person{
   readonly name:string
   age?:number
} */

interface Person{
    readonly name:string
    age?:number
    sayhello?():void
 }





const p :Person={
    name:"黑子",
    age:21,
    sayhello(){
        console.log("你好！！！");
        
    }
}

interface Animal{
    name:string;
    age:number
}


interface snake extends Animal{
    length:number
}

// 创建类实现Animal接口
class Dog implements Animal{
    name: string;
    age:number;

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

bark(){
    console.log("哈哈哈");
    
}
}

class Cat implements Animal{
    name: string;
    age:number;

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

miao(){
    console.log("呼呼呼");
    
}
}

function fn(animal:Animal){
    if(animal instanceof Dog){
        animal.bark()
    }
    else if(animal instanceof Cat){
        animal.miao
    }
}

fn(new Dog("大黄",2))
fn(new Cat("小黑",2))

