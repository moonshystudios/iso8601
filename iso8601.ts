// 2024-05-08T13:37:38.027201+0000
// yyyy-mm-ddThh:mm:ss.ms+timezone

interface timestampJSONProps {
    year: string
    month: string
    day: string
    hour: string
    minute: string
    second: string
    millisecond: string
    timezoneOffset: string
}


export const getTimestamp = () => {

    let timestamp: string
    let timestampJSON: timestampJSONProps

    // new Date
    const date: Date = new Date()

    // Date and Time Components
    const year: string = date.getFullYear().toString().padStart(4, '0')
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0')
    const day: string = date.getDate().toString().padStart(2, '0')
    const hour: string = date.getHours().toString().padStart(2, '0')
    const minute: string = date.getMinutes().toString().padStart(2, '0')
    const second: string = date.getSeconds().toString().padStart(2, '0')
    const millisecond: string = date.getMilliseconds().toString().padStart(6, '0')

    // Timezone offset
    const timezoneOffset: string = (+date.getTimezoneOffset()).toString()
    
    timestamp = `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}${timezoneOffset}`
    timestampJSON = {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        timezoneOffset: timezoneOffset
    }

    return { timestamp, timestampJSON }
}