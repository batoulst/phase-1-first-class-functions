function receivesAFunction(fun){
    fun();
    return
}
function returnsANamedFunction(){
    const ex = function(){}
    return ex
}
function returnsAnAnonymousFunction(){
    return function(){}
}