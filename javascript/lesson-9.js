function makeCar(make, model, mpg, color){
    var carObject = {
        make: make,
        model: model,
        mpg: mpg,
        color: color,
        displayName: function(){
            return make + ' ' +  model + ' ' + '(' + mpg + ' mpg)';
        }
    }

    //this.make = make;
    //var carObject1 = new Car(Mazda...)
    return carObject;
}