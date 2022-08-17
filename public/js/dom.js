console.log('hello from dom');
fetch('/countries')
  .then((res) => res.json())
  .then((res) => console.log(res, 'countriesssss'))
  .catch(console.error);

  fetch('/currentLocation')
  .then((res) => res.json())
  .then((res) => console.log(res, 'locationnnnnn'))
  .catch(console.error);
  

