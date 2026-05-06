const interval = 1000;

const intervalId: NodeJS.Timeout = setInterval(() => {
  const timeString = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Ensure 24-hour format
  })
  postMessage(timeString);
}, interval);

self.onmessage = (e) => {
  if (e.data === 'stop') {
    clearInterval(intervalId);
  }
};