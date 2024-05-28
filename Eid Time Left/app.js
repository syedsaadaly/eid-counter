document.addEventListener("DOMContentLoaded", function() {
    const eidDate = new Date("2024-06-17"); 
    function updateEidCountdown() {
        const now = new Date();
        const timeDifference = eidDate - now;

        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

        
        document.getElementById("countdown").innerHTML = `${daysRemaining} DAYS  ${hoursRemaining} Hours  ${minutesRemaining} Minutes  ${secondsRemaining} Seconds`;
    }

    setInterval(updateEidCountdown, 1000);

    updateEidCountdown();
});