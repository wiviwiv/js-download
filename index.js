export default (fileName, content = '') => {
  const blob = new Blob([content])
  const aTag = document.createElement('a')
  aTag.download = fileName
  aTag.href = URL.createObjectURL(blob)
  aTag.click()
}
