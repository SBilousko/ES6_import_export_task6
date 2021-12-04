import moment from "moment";

export function calculateSumOfNumbers(numbers) {
  return numbers.reduce((sum, current) => {
    return sum + current;
  }, 0);
}

export function getFormattedTime(date) {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}
