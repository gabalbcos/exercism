 export function checkHumidityLevel(humidity) {
    if (humidity > 70) {
      throw new Error ('Oh, no... Humidity too high, no good!')
    }
 }

//instances of error
//Broken Sensor
export class ArgumentError extends Error{
  constructor() {
    super('Argument Error');
  }
}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature ${temperature} is too high! Overheating!`);
    this.temperature = temperature;
  }
}


export function reportOverheating(temperature) {
   if(temperature === null) {
     throw new ArgumentError;
 } else if (temperature > 500) {
     throw new OverheatingError(temperature); 
 } else {
     return
 }
}

export function monitorTheMachine(actions) {
    try {
      actions.check();
    } catch(error) {
      switch(error.constructor) {
        case ArgumentError:
          actions.alertDeadSensor();
          return;
        case OverheatingError:
          if(error.temperature > 600) {
            actions.shutdown();            
            return;
          } if (error.temperature > 500) {
            actions.alertOverheating();
            return;
          }
      } 
        throw error;
    }
  }
