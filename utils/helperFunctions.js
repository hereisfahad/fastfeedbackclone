export const formatDate = (rawDate) => {
  let date = new Date(rawDate)
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
