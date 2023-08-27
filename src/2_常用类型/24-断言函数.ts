export{}
/* 
    断言
        断定一个事的真伪，并在判断错误时，抛出异常
    断言函数
        创建一个起到断言作用的函数
        asserts 条件 
        条件就是一个类型谓词
        断言函数用来为一个类型进行断言，断言后变量的类型就会被TS收窄
            如果断言正确，则什么也不需要做2，如果断言错误，通常会在断言函数中抛出异常终止程序！

        作用：（使用场景）
        
*/


interface Circle{
    kind:"circle"
    radius:number
}
let a :unknown={};

(a as Circle).kind

function isCircle(Value:any) :  asserts Value is Circle{
    // 断言函数通常不需要返回值，通常会在断言失败时报错
    if(Value.kind!=="circle"){
        throw new Error("value的类型不是circle");
        
    }
}

isCircle(a) //调用了断言函数，那么在函数后面所有的a的类型都会被确认为Circle


console.log(a.kind);


