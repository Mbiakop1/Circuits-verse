const format = (date, locale, options) =>
        new Intl.DateTimeFormat(locale, options).format(date)

const now = new Date()

format(now, 'es') // '5/1/2022'
format(now, 'es', { dateStyle: 'long'}) // "5 January de 2022'
format(now, 'es', { timeStyle: 'short'}) // '14:58"
format(now, 'ko') // ‘2022. 1. 5.'
format(now, 'en', {wednesday: 'short', day: 'numeric'}) // '5 wed