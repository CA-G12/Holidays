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
console.log('hello from dom');
fetch('/countries')
  .then((res) => res.json())
  .then((res) => console.log(res, 'countriesssss'))
  .catch(console.error);

fetch('/currentLocation')
  .then((res) => res.json())
  .then((res) => console.log(res, 'locationnnnnn'))
  .catch(console.error);

const dayVal = document.querySelector('#day');
const monthVal = document.querySelector('#month');
const yearVal = document.querySelector('#year');
const countryVal = document.querySelector('#country');
console.log(dayVal.value, monthVal.value, yearVal.value, countryVal.value);
// const searchURL = `/search/${lat},${lon}`; 
// fetch(searchURL)
//   .then((res) => res.json())
//   .then((res) => console.log(res, 'christmassss'))
//   .catch(console.error);
