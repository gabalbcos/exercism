public class LogLevels {
    
  public static String message(String logLine) {
      String[] splitString = logLine.split(":");
      return splitString[1].trim();
  }

  public static String logLevel(String logLine) {
  String[] splitString = logLine.split(":");
  String splitStringLowerCase = splitString[0].toLowerCase();
  // Remove the brackets and return the log level
  return splitStringLowerCase.substring(1, splitStringLowerCase.length() - 1);
  }

  public static String reformat(String logLine) {
      return message(logLine) + " (" + logLevel(logLine) + ")";
  }
}
