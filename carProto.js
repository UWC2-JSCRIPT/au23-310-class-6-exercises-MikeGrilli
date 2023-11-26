/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
    constructor(model) {
        this.model = model
        this.currentSpeed = 0
    }

    accelerate() {
        this.currentSpeed ++
    }

    break() {
        this.currentSpeed --
    }

    toString() {
        return `Car Model ${this.model} current speed is ${this.currentSpeed}`
    }
}

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */



//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const ford = new Car('Outback')
ford.accelerate()
// ford.break()
console.log(ford.toString())