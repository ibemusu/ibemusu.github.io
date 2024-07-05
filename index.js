document.addEventListener("DOMContentLoaded", () => {
    // Function to update the current time in UTC
    function updateTime() {
        const now = new Date();
        const utcDate = now.toISOString().split('T')[0]; // Extracts the date part of the ISO string (YYYY-MM-DD)
        const utcTime = now.toUTCString().split(' ')[4];
        document.querySelector("[ data-testid='currentTimeUTC']").textContent = utcTime;
    }

    // Function to update the current day of the week
    function updateDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        const day = days[now.getUTCDay()];
        document.querySelector("[data-testid='currentDay']").textContent = day;
    }
    
    // Initial update
    updateTime();
    updateDay();

    // Update time every second
    setInterval(updateTime, 1000);
});
