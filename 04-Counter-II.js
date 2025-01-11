    let createCounter=function(init){
        let currentValue=init;
        return{
            Increment:()=> ++currentValue,
            Decrement:()=> --currentValue,
            Reset:()=>{currentValue=init}

        }
    }
  const counter=  createCounter(5)
    console.log(counter.Increment());
    console.log(counter.Decrement());
    console.log(counter.Reset());
