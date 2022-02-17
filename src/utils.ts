export function formatTime(time: string): string {
  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  let correctedHours: number;
  let correctedMinutes: number;
  if (minutes !== 60) {
    correctedHours = hours;
    correctedMinutes = minutes;
  } else {
    correctedHours = hours + 1;
    correctedMinutes = 0;
  }

  const formattedHours = correctedHours.toString().padStart(2, "0");
  const formattedMinutes = correctedMinutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}
