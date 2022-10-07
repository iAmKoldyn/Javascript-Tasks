export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70){
    throw new ArgumentError();
  }
}
export function reportOverheating(temperature) {
  if(temperature > 500){
    throw new OverheatingError(temperature);
  } else if(temperature == null){
    throw new ArgumentError();
  }
}
export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if(error instanceof ArgumentError){
      actions.alertDeadSensor();
    } else if(error instanceof OverheatingError){
      if(error.temperature > 600){
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      actions.check();
    }
  }
}