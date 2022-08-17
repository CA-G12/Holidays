const tbody = document.querySelector('#tbody');

function createTableElement(element, parent, content) {
  const childEle = document.createElement(`${element}`);
  childEle.textContent = content;
  parent.appendChild(childEle);
  return childEle;
}
// For example
// let parent = createTableElement("tr", tbody)
// createTableElement("td", parent, "testtt")
