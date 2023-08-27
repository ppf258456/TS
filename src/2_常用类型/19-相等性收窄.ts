export{}
/* 
    相等性收窄
    利用相等运算符来对类型进行收窄
    由于相等和不等在JS中会导致自动类型转换
        所以建议使用全等和不全等来进行收窄
*/
function fn(str:string|undefined){
    if(typeof str!=="string"){
        str
    }
}

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

function getArea(shape:Shape):number{
   if(shape.kind==="circle"){
    return  Math.PI*shape.radius**2//圆形面积
   }
     
  return  shape.sideLength**2//正方形的面积
}