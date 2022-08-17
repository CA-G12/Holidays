const tbody = document.querySelector('#tbody');
const select = document.querySelector('#input');
const country = document.querySelector('#country');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const currentDate = new Date();
const dayValue = currentDate.getDate();
const monthValue = currentDate.getMonth() + 1;
const yearValue = currentDate.getFullYear();
day.value = dayValue;
month.value = monthValue;
year.value = yearValue;

function createTableElement(element, parent, content, value) {
  const childEle = document.createElement(`${element}`);
  childEle.textContent = content;
  if (element === 'option') {
    childEle.setAttribute('value', value);
  }
  parent.appendChild(childEle);
  return childEle;
}
// For example
// let parent = createTableElement("tr", tbody)
// createTableElement("td", parent, "testtt")
console.log('hello from dom');
fetch('/countries')
  .then((res) => res.json())
  .then(
    (res) => {
      for (let i = 0; i < res.countries.length; i++) {
        createTableElement('option', select, res.countries[i].name, res.countries[i].code);
      }
    },
  )

  .catch(console.error);

fetch('/currentLocation')
  .then((res) => res.json())
  .then((res) => {
    console.log(res, 'locationnnnnn');
    country.textContent = res;
  })
  .catch(console.error);
