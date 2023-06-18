const playerContainer = document.getElementById('puppy-bowl-container');
const formContainer = document.getElementById('puppy-bowl-form');


const cohortName = '2302-ACC-CT-WEB-PT-B';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players/`)
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(`Players not found!`, err);
  }
};

const fetchSinglePlayer = async (playerId) => {
  try {
    fetch(`${APIURL}/players/${playerId}`)
  } catch (err) {
      console.error(`Player not found! #${playerId}!`, err);
  }
};

const removePlayer = async (playerId) => {
  try {
    fetch(`${APIURL}/players/${playerId}`, { method: 'DELETE' });
  } catch (err) {
      console.error(
          `Player  #${playerId} cannot be removed!`,
          err
      );
  }
};

const renderPlayers = async () => {
  const players = await fetchAllPlayers();
  players.forEach((player) => {
    const newPlayerCard = renderSinglePlayer(player);
    playerContainer.appendChild(newPlayerCard);
  });
}

const renderSinglePlayer = (player) => {
  // create the card with class and append do container
  const newPlayerCard = document.createElement("div");
  newPlayerCard.id = player.id;
  newPlayerCard.className = "player-card"
  playerContainer.appendChild(newPlayerCard);

  // create the h1 for name and append to card
  const newPlayerName = document.createElement("h1");
  newPlayerCard.appendChild(newPlayerName);
  newPlayerName.innerHTML = player.name

  // create the img for image and append to card
  const newPlayerImage = document.createElement("img");
  newPlayerImage.className = "player-image";
  newPlayerCard.appendChild(newPlayerImage);
  newPlayerImage.src = player.imageUrl;

  // create the show details button and append to card
  const showDetailsButton = document.createElement("button");
  newPlayerCard.appendChild(showDetailsButton);

  showDetailsButton.addEventListener(("click"), () => {
    const moreDetails = renderMoreDetails(player);
    newPlayerCard.appendChild(moreDetails);
  });

  showDetailsButton.innerHTML = "Show Details";

  // create the delete button and append to card
  const deleteButton = document.createElement("button");
  newPlayerCard.appendChild(deleteButton);

  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener(("click"), async () => {
    await removePlayer(player.id);
    // remove element from DOM
    const deleted = document.getElementById(player.id)
    deleted.remove();
  });

  return newPlayerCard;
}

const renderMoreDetails = (player) => {
  const breed = player.breed;
  const status = player.status;

  const playerDetailsElement = document.createElement("div");
  playerDetailsElement.className = "detail";

  const playerDetailList = document.createElement("ul");
  playerDetailsElement.appendChild(playerDetailList);

  const breedElement = document.createElement("li");
  breedElement.innerHTML = `Breed: ${breed}`;
  playerDetailList.appendChild(breedElement);

  const statusElement = document.createElement("li");
  statusElement.innerHTML =  `Status: ${status}`;
  playerDetailList.appendChild(statusElement)
  return playerDetailsElement;
}

const renderForm = () => {
  const form = document.createElement("div");
  form.innerHTML = `
  <form>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="breed">Breed:</label><br>
    <input type="text" id="breed" name="breed"><br>
    <label for="status">Status:</label><br>
    <input type="text" id="status" name="status"><br>
    <label for="imageUrl">ImageUrl:</label><br>
    <input type="text" id="imageUrl" name="imageUrl">
  </form>
  `;
  formContainer.appendChild(form);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.id = "submit-button";
  submit.innerHTML = "Submit";
  formContainer.appendChild(submit);
}

const addNewPlayer = () => {

}

const init = async () => {
  renderForm();
  renderPlayers();
}

init();