
class BirdWatcher {
  private final int[] birdsPerDay;

  public BirdWatcher(int[] birdsPerDay) {
      this.birdsPerDay = birdsPerDay.clone();
  }

  public int[] getLastWeek() {
      int[] birdsThatVisitedLastWeek = {0, 2, 5, 3, 7, 8, 4};
      return birdsThatVisitedLastWeek;
  }

  public int getToday() {
      return birdsPerDay[6];
  }

  public void incrementTodaysCount() {
      birdsPerDay[6] = birdsPerDay[6] + 1;
  }

  public boolean hasDayWithoutBirds() {        
  for(int i = 0; i < 7; i++) {
      if(birdsPerDay[i] == 0)
          return true;
      }
      return false;
  }
  
  public int getCountForFirstDays(int numberOfDays) {
      int birdCount = 0;
      if (numberOfDays > 6){
       for(int birds: birdsPerDay) {
           birdCount += birds; 
       }   
      } else {
      for(int i = 0; i < numberOfDays; i++) {
          birdCount =  birdCount + birdsPerDay[i];
       }
      }
      return birdCount;
  }

  public int getBusyDays() {
      int busyDays = 0;
        for(int i = 0; i < 7; i++) {
          if(birdsPerDay[i] >= 5) {
              busyDays += 1;
          }
      }
      return busyDays;
  }

}
