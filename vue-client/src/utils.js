import { addDays, eachDay, isTuesday, addHours, addMinutes } from 'date-fns'

function nextTuesday() {
  const oneWeekFromToday = addDays(new Date(), 7)
  const daysArr = eachDay(new Date(), oneWeekFromToday)
  const tuesday = daysArr.find(v => isTuesday(v))
  const tuesdayAtSix = addHours(tuesday, 18)
  const tuesdayAtSixFifteen = addMinutes(tuesdayAtSix, 15)
  return tuesdayAtSixFifteen
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function passwordIsValid(password) {
  if (
    password.match(/[a-z]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[0-9]/g) &&
    password.match(/[^a-zA-Z\d]/g) &&
    password.length >= 8
  ) {
    return true
  }
  return false
}

function debounce(fn, delay) {
  var timeoutID = null
  return function() {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function() {
      fn.apply(that, args)
    }, delay)
  }
}

export { emailIsValid, debounce, passwordIsValid, nextTuesday }
