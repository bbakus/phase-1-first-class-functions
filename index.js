


function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(test){
    const another = () => test + 2
    return another
}

function returnsAnAnonymousFunction(){
    return () => 'function'
}

