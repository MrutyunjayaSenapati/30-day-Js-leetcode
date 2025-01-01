var createCounter=function(n){
    return function(){
        return n++;
    }
};

let count=createCounter(5);
console.log(count());
console.log(count());
console.log(count());
