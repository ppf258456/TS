export{}
/* 
    instanceof
        用来检查某个类的圆形是否出现在了某个对象的原型链
        instanceof只适用与检查类和实例的关系
*/
function fn(value:string[] |Date){
/*     if(value instanceof Date){
        value
    }else{
        value
    } */
    if(Array.isArray(value)){
        value
    }
}