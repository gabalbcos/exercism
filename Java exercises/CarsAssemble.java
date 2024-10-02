public class CarsAssemble {
  public double productionRatePerHour(int speed) {
      if (speed > 0 && speed < 5) {
          return speed * 221.0;
      } else if ( speed > 4 && speed < 9) {
          return speed * 221.0 * 0.9;
      } else if (speed == 9) {
          return speed * 221.0  * 0.8;
      } else if (speed == 10) {
          return speed * 221.0  * 0.77;
      }
      return 0;
      }

  public double workingItemsPerMinute(int speed) {
      if (speed > 0 && speed < 5) {
          return ((int)productionRatePerHour(speed)) / 60;
      } else if ( speed > 4 && speed < 9) {
          return ((int)productionRatePerHour(speed)) / 60;
      } else if (speed == 9) {
          return ((int)productionRatePerHour(speed)) / 60;
      } else if (speed == 10) {
          return ((int)productionRatePerHour(speed)) / 60;
      }
      return 0;
  }

}
