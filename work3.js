function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
  
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock(); 
  