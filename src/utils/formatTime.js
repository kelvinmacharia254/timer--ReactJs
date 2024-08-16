export function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time%3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedHours = String(hours).padStart(2, '0');
   const formattedMinutes = String(minutes).padStart(2, '0');
   const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
