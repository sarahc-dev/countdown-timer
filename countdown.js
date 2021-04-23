// Calculates the time remaining 
function updateTimer(deadline) {
    const now = new Date().getTime()
    const t = deadline - now

    return {
        'days': Math.floor(t / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((t / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((t / 1000 / 60) % 60),
        'seconds': Math.floor((t / 1000) % 60),
        'total': t
    }
}

// Adds a class to animate clock flipping over each time number changes
function animateClock(toAnimate) {
    toAnimate.classList.add('flip')
    setTimeout(function() {
        toAnimate.classList.remove('flip')
    }, 700)
}

// Timer will update every second
function startTimer(deadline) {
    const timerInterval = setInterval(function() {
        const timer = updateTimer(deadline)

        const days = document.getElementById('days')
        const hours = document.getElementById('hours')
        const minutes = document.getElementById('minutes')
        const seconds = document.getElementById('seconds')

        days.innerHTML = timer.days
        hours.innerHTML = timer.hours
        minutes.innerHTML = timer.minutes
        seconds.innerHTML = timer.seconds

        // animation every time number changes
        const toAnimate = document.getElementsByClassName("container")
        console.log(toAnimate)
        animateClock(toAnimate[3])
        if (timer.seconds == 59) animateClock(toAnimate[2])
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(toAnimate[1])
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(toAnimate[0])
        
        
        // Check for end of timer
        if (timer.total < 1) {
            clearInterval(timerInterval)
            days.innerHTML = 0
            hours.innerHTML = 0
            minutes.innerHTML = 0
            seconds.innerHTML = 0
        }
    }, 1000)
}

// Set end date - using 14 days as example
window.onload = function() {
    const deadline = new Date(Date.now() + 12096e5).getTime()
    startTimer(deadline)
}


