const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const secondsContainer1 = document.querySelector('#seconds1')
const minutesContainer1 = document.querySelector('#minutes1')
const hoursContainer1 = document.querySelector('#hours1')
const daysContainer1 = document.querySelector('#days1')

const nextYear = new Date().getFullYear()
const newYearTime = new Date(`Jun 20 ${nextYear} 00:00:00`)
const countdownContainer = document.querySelector('#countdown')
const countdownContainer1 = document.querySelector('#countdown1')

const getTimeUnit = unit =>  unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)

    secondsContainer1.textContent = getTimeUnit(seconds)
    minutesContainer1.textContent = getTimeUnit(minutes)
    hoursContainer1.textContent = getTimeUnit(hours)
    daysContainer1.textContent = getTimeUnit(days)

}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
}



const handleCountdownDisplay = () => {
    spinnerLoadig.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)