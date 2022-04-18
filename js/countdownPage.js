const secondsContainer1 = document.querySelector('#seconds1')
const minutesContainer1 = document.querySelector('#minutes1')
const hoursContainer1 = document.querySelector('#hours1')
const daysContainer1 = document.querySelector('#days1')

const nextYear1 = new Date().getFullYear()
const newYearTime1 = new Date(`May 31 ${nextYear} 00:00:00`)
const countdownContainer1 = document.querySelector('#countdown1')

const getTimeUnit1 = unit =>  unit < 10 ? '0' + unit : unit

const insertCountdownValues1 = ({ days, hours, minutes, seconds }) => {
    secondsContainer1.textContent = getTimeUnit1(seconds)
    minutesContainer1.textContent = getTimeUnit1(minutes)
    hoursContainer1.textContent = getTimeUnit1(hours)
    daysContainer1.textContent = getTimeUnit1(days)

}

const updateCountdown1 = () => {
    const currentTime1 = new Date()
    const difference = newYearTime1 - currentTime1

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60

    insertCountdownValues1({ days, hours, minutes, seconds })
}



const handleCountdownDisplay1 = () => {
    spinnerLoadig.remove()
    countdownContainer1.style.display = 'flex'
}

setTimeout(handleCountdownDisplay1, 1000)

setInterval(updateCountdown1, 1000)