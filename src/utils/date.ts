export function dateFixWindowTime() {
  let secondsToDelay = 55;
  //let date = new Date(currentTimeString[1]);
  let date = new Date(Date.now());
  date.setMilliseconds(0);
  if (date.getSeconds() % 10 !== 0) {
    date.setSeconds(date.getSeconds() - (date.getSeconds() % 10));
  }

  if (secondsToDelay % 10 !== 0) {
    date.setSeconds(
      date.getSeconds() - (secondsToDelay + (secondsToDelay % 10))
    );
  }

  return date.toISOString();
}
