export{}

/* 
    typeof
        在js中可以通过typeof来检查值的类型，会返回一个字符串作为结果
        string Boolean number undefined object function bigint symble...
        在TS中如果将typeof用在流程控制语句中，TS会根据typeof的结果自动进行类型收窄
*/
function fn(value:string|number){
    if(typeof value=== "string"){
        return value.toUpperCase()
    }
    value++
}