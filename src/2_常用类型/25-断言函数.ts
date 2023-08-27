export{}
/* 
    断言函数实际上是TS中一种运行时的类型检查方式

    使用场景：
    代码写的再好，依然不可完全避免
    比如： 当调用后台接口去加载数据时，后台所返回的数据需要经过前端你的渲染后显示
        作为前端，无法保证后台的数据结构的准确性，这时就会引起运行时的异常
*/

// 创建一个数据的接口
interface  Data{
    msg:string
}

//断言函数
function isData(data:any) :asserts data is Data{
    if(data.msg ===undefined) throw new Error("Data的类型错误！！")
}

//创建函数，模拟后台加载数据
function getData() :Promise<Data>{
    return new Promise((resolve,reject)=>{
        const data ={msxxg:"这是合法数据"} //从服务器加载的数据，由于内部数据未知，
        //即需要我们对data进行一系列的检查，正确则调用resolve返回数据，错误则调用reject进行报错
        // 使用断言函数来断崖data类型
        isData(data)
        
        resolve(data)
    })
}
getData().then((data)=>{
    console.log(data.msg);
}).catch((err)=>{
    console.log("错误！",err );
    
})