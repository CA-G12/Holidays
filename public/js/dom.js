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

const clearingSection = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};

function createTableElement(element, parent, content, value) {
  const childEle = document.createElement(`${element}`);
  childEle.textContent = content;
  if (element === 'option') {
    childEle.setAttribute('value', value);
  }
  parent.appendChild(childEle);
  return childEle;
}
// Getting array of countries
fetch('/countries')
  .then((res) => res.json())
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      createTableElement('option', select, res[i].name, res[i].code);
    }
  })
  .catch(console.error);

// Getting the visitor current location
fetch('/currentLocation')
  .then((res) => res.json())
  .then((res) => {
    country.textContent = res;
  })
  .catch(console.error);

// Automatically display the holidays today in your current location
let searchURL = `/search?country=${select.value}&year=${year.value}&month=${month.value}&day=${day.value}`;
fetch(searchURL)
  .then((res) => res.json())
  .then((res) => {
    clearingSection(tbody);
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

// display the holidays on the selected date and location
[day, month, year, select].forEach((el) => {
  el.addEventListener('change', () => {
    searchURL = `/search?country=${select.value}&year=${year.value}&month=${month.value}&day=${day.value}`;
    fetch(searchURL)
      .then((res) => res.json())
      .then((res) => {
        clearingSection(tbody);
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
