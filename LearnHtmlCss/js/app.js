console.log("Hello World from JS");

var universities = [
  {
    name: 'Ajay'
    , hasGone: true
    , year: 2008
  },
  {
    name: 'Sachin'
    , hasGone: false
    , year: 2024
  },
  {
    name: 'Varinder'
    , hasGone: true
    , year: 2025
  }
];

universities.forEach(function (university) {
  if (university.hasGone) {
    console.log(university.name);
    console.log(university.year);
  } else {
    console.log(university.name);
  }
})


