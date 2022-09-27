function calculate(equation){
    var value1  = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);  
    var value3 = parseInt(document.getElementById("value3").value); 
    
    var result = perimeter(value1, value2);

    if(equation == 'perimeter'){
        result = perimeter(value1, value2);
    }else if(equation == 'area'){
        result = area(value1, value2);
    }else if(equation == 'volume'){
        result = volume(value1, value2, value3);
    }
    
    document.getElementById("result").innerHTML = result;
} 

function perimeter(value1, value2) {
    return value1 + value2 + value1 + value2;
}

function area(value1, value2) {
    return value1 * value2;
}

function volume(value1, value2, value3) {
    return value1 * value2 * value3;
}


