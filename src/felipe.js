export async function felipe() {
  console.log('teste Felipe')
  let htmlText = await (await fetch("https://www.youtube.com/@gamefromscratch")).text()
  console.log(htmlText)
  console.log(htmlText.substring(htmlText.indexOf("subscribers") - 5, htmlText.indexOf("subscribers") - 2))
}