var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getFormattedDate = (dateLong: number) => {
    console.log(dateLong)
    const date = new Date(dateLong)
    const dayOfTheMonth = date.getDate()
    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear()

    return days[day] + ", " + months[month] + " " + dayOfTheMonth + ", " + year  
  }

export const getFormattedTime = (timeLong: number) => {
    const time = new Date(timeLong)
    const hour = time.getHours()
    const minute = time.getMinutes()
    const am_pm = hour <= 12 ? "A.M." : "P.M."

    return hour%12 + ":" + minute + " " + am_pm
}

export const datePickerStringToLong = (date: string) => {
  return Date.parse(date)
}

export const timePickerStringAndSelectedDateLong = (time: string, date: string) => {
  return Date.parse(date + " " + time)
}