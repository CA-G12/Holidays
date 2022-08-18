const tbody = document.querySelector('#tbody');
const select = document.querySelector('#input');
const country = document.querySelector('#country');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const result = document.querySelector('#result');
const body = document.body;
const currentDate = new Date();
const dayValue = currentDate.getDate();
const monthValue = currentDate.getMonth() + 1;
const yearValue = currentDate.getFullYear();
day.value = dayValue;
month.value = monthValue;
year.value = yearValue;

const clearingSection = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};

function createTableElement(element, parent, content, value, className) {
  const childEle = document.createElement(`${element}`);
  childEle.textContent = content;
  childEle.classList.add(`${className}`);
  if (element === 'option') {
    childEle.setAttribute('value', value);
  }
  parent.appendChild(childEle);
  return childEle;
}
// Getting array of countries
const countriesArray = {};
console.log('hello from dom');
fetch('/countries')
  .then((res) => res.json())
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      countriesArray[res[i].code] = res[i].name;
      createTableElement('option', select, res[i].name, res[i].code);
    }
    return countriesArray;
  })
  .then((data) => fetch('/currentLocation')
    .then((res) => res.json())
    .then((res) => {
      console.log(res, 'locationnnnnn');
      country.textContent = countriesArray[res];
      country.value = res
    }))

  .catch(console.error);
console.log(countriesArray);

// Automatically display the holidays today in your current location


// display the holidays on the selected date and location
[day, month, year, select].forEach((el) => {
  el.addEventListener('change', () => {
    let searchURL = `/search?country=${select.value}&year=${year.value}&month=${month.value}&day=${day.value}`;
    fetch(searchURL)
      .then((res) => res.json())
      .then((res) => {
        clearingSection(tbody);
        console.log(res.length, 'lennnnnn');
        clearingSection(result);

        if (res.length === 0) {
          createTableElement('h1', result, "There's no holidays in this date :(", '', 'noHoliday');
        }
        res.forEach((holiday) => {
          const parent = createTableElement('tr', tbody);
          createTableElement('td', parent, holiday.location);
          createTableElement('td', parent, holiday.date);
          createTableElement('td', parent, holiday.week_day);
          createTableElement('td', parent, holiday.name);
          createTableElement('td', parent, holiday.type);
        });
      })
      .catch(console.error);
  });
});
