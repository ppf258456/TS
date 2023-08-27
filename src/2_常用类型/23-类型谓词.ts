export{}

//定义一个圆形的接口
interface Circle{
    kind:"circle"
    radius:number
}

//定义一个表示正方形的接口
interface Square{
    kind:"square"
    sideLength:number
}

type Shape =Circle |Square

/* 
    在对值的类型进行判断时，如果有一些类型需要经常判断，火有些类型的判断比较复杂
        此时我们就习惯性的希望可以将这些验证封装到一个函数中，然后通过函数的返回值来判断类型

    但是如果我们直接创建一个返回布尔值的函数，对于TS来说这就是一个普通的函数，无法用力啊及逆行类型的收窄

    类型谓词
        类型谓词时一个特殊的返回值类型，设置后TS会根据这个函数的返回值来对值的类型进行收窄
        p is T
        实例 is 类型
*/

//创建一个函数 验证是否为圆形
function isCircle(shape:Shape): shape is Circle{
    return shape.kind==="circle"
}


function getArea(shape:Shape):number{
   if(isCircle(shape)){
    return  Math.PI*shape.radius**2//圆形面积
   }
     
  return  shape.sideLength**2//正方形的面积
}