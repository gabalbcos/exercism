public class SalaryCalculator {
  public double salaryMultiplier(int daysSkipped) {
     return daysSkipped < 5 ? 1.0 : .85;
  }

  public int bonusMultiplier(int productsSold) {
   return productsSold < 20 ? 10 : 13;
  }

  public double bonusForProductsSold(int productsSold) {
      return bonusMultiplier(productsSold) * productsSold;
  }

  public double finalSalary(int daysSkipped, int productsSold) {
     double finalSalary = salaryMultiplier(daysSkipped) * 1000.00 + bonusForProductsSold(productsSold);
      return finalSalary < 2000.00 ? finalSalary : 2000.00;
  } 
}
