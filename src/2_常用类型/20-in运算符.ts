export{}

/* 
    in收窄
        通过检查类型中是否含有某个属性进行收窄类型
*/

//定义一个圆形的接口
interface Circle{

    radius:number
}

//定义一个表示正方形的接口
interface Square{
  
    sideLength:number
}

type Shape =Circle |Square

function getArea(shape:Shape):number{
   if("radius"in shape){
    return  Math.PI*shape.radius**2//圆形面积
   }
     
  return  shape.sideLength**2//正方形的面积
}