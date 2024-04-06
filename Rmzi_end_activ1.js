const endDate = new Date('2023-12-01T00:00:00Z');
      
      // Calculate the remaining days until the end date
      function getRemainingDays() {
        const now = new Date();
        const timeDiff = endDate - now;
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return daysRemaining;
      }
      
      // Update the countdown element with the remaining days
      function updateCountdown() {
        const countdownEl = document.querySelector('#countdown');
        const daysRemaining = getRemainingDays();
        if (daysRemaining > 0) {
          window.location.href = 'indeex.html'; 
        } else {
         window.location.href = 'end.html'; 
        }
      }
      setInterval(updateCountdown, 1000);
