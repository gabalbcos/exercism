Array methods

.map
.filter
.sort (needs a rule ex. alphabetical (a, b) => a > b ? 1 : -1)
.find - finds and returns the first element that satisfies the condition ex: (number) => number > 25)

document.createTextNode
document.createElement(),
element.setAttribute(atribute, value)


object?.property (? is used to make sure the function doesn't break when the property is missing)

const parentElement = document.createElement("button")
const parentElementText = document.createTextNode("Click me")

// attach the text "Click me" to the button
parentElement.appendChild(parentElementText)