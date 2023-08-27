export{}

/* 
    null
    undefined
        null 和undefined 在TS中默认是所有类型的子类型，默认情况下 null和undefined可以赋值给任意类型
        但是这样会带来隐患，建议在开发时将 strictNullChecks 开启 开启后null和undefined只能赋值给对应的类型

    void
        void 表示空类型
        默认情况下void类型可以接手undefined 和null
        如果开启了strictNullChecks，则只能接受undefined
        用来指定没有返回值的函数的函数值类型
*/

let a:null | string = null
let b:undefined = undefined

function get(name:string|undefined){
    if(typeof name==="string"){
        name.length
    }
}

let c :void =undefined

function fn():void{}