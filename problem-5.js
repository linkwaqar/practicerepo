function sumFibonacci() {

    var sum = 0;
    
    var fibArray = fibSeq();
    
    
    
    for( var i = 0, n = fibArray.length; i<n; i++) {
    
    sum += fibArray[i];
    
    }
    
    
    return sum;
    
    }
    
    
    
    function fibSeq() {
    
    
    var a = 1;
    
    var b = 2;
    
    var next = a + b; 
    
    
    var fibArray = []
    
    
    
    while(next < 4000000) {
    
    if(next % 2 === 0) {
    
    fibArray.push(next);
    
    }
    
    
    
    a = b
    
    b = next
    
    next = a+b
    
    }
    
    
    
    return fibArray;
    
    
    }
    
    
    console.log(fibSeq());
    
    console.log(sumFibonacci());

    