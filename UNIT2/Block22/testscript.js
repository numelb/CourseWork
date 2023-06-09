
const starwarsContainer = document.getElementById('#starwars-container');

const STARWARS_PLANETS_API_URL =
  'http://swapi.dev/api/planets';

// get all planets
const getAllPlanets = async () => {
  try {
    console.log("about to fetch the data");
    const response = await fetch(STARWARS_PLANETS_API_URL);
    // turn the data from the api into json format
    const planets = await response.json();
    return planets;
  } catch(err) {
    console.log("err: ", err);
  }
};

// get single planet by id
const getPlanetById = async (id) => {
  try {
    const response = await fetch(`${STARWARS_PLANETS_API_URL}/${id}`);
    const planet = await response.json();
    console.log("planet: ", planet)
  } catch (err) {
    console.log("err: ", err);
  }
};

// render all planets
const renderPlanets = async () => {
  const starwarsContainer = document.getElementById("starwars-container");
  const planets = await getAllPlanets(); //[{planet}, {planet}, {planet}]
  console.log("planets after call: ", planets)
  const results = planets.results;
  const planetList = document.createElement("ul");
  starwarsContainer.appendChild(planetList);
  for (const planet of results) {
    const planetElement = document.createElement("li");
    planetElement.innerHTML = planet.name;
    planetList.appendChild(planetElement);
  }
};

// init function
const init = async () => {
  // your code here
  await renderPlanets();
};

init();