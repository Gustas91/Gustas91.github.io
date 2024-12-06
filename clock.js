function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    const timeString = hours + ':' + minutes + ':' + seconds;
  
    document.getElementById('clock').textContent = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);