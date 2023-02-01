const fnct = function() {
    return `This is a callback function.`;
}

function fnct2() {
    return `This is the second callback function.`;
}

function receivesAFunction(fnct) {
    return fnct();
} 

function returnsANamedFunction() {
    return fnct2;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`Anonymous Function here.`);
    };
}