export function parseDate(dateString: string): Date{
  let date = dateString.split('/').map((d) => parseInt(d))
  return new Date(date[2], date[1]-1, date[0])
}
