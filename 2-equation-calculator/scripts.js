// FOR A CUBE
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
    
    document.getElementById("result1").innerHTML = result;
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

// FOR A PYRAMID 
function calculateTri(equation){
    var value4  = parseInt(document.getElementById("value4").value);
    var value5 = parseInt(document.getElementById("value5").value);  
    var value6 = parseInt(document.getElementById("value6").value); 
    
    var result = perimeterTri(value4, value5);

    if(equation == 'perimeter'){
        result = perimeterTri(value4, value5);
    }else if(equation == 'area'){
        result = areaTri(value4, value5);
    }else if(equation == 'volume'){
        result = volumeTri(value4, value5, value6);
    }
    
    document.getElementById("result2").innerHTML = result;
} 

function perimeterTri(value4, value5) {
    return value4 + value5 + value4 + value5;
}

function areaTri(value4, value5) {
    return value4 * value5;
}

function volumeTri(value4, value5,  value6) {
    return 1/3 * value4 * value5 * value6;
}

