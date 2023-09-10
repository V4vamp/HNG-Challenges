document.addEventListener('DOMContentLoaded', () => {
    

    const now = new Date();
    

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayElement.textContent = "Current Day: " + dayOfWeek;


    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    utcTimeElement.textContent = "Current UTC Time (ms): " + now.getTime();

});


