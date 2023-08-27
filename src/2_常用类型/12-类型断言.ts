export{}

/* 
    通过断言
        可以手动指定类型，让变量类型更加具体
        断言的语法：
        (<类型> 变量).xxx
            不支持TSX
        (变量 as 类型).xxx
    断言只在编译时有效，使用断言时一定要确保类型正确
*/
let str :unknown ="hello world";

(<string>str).length;
(str as string).length