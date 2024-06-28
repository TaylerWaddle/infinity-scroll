// Unsplash API

const count = 10;
const apiKey = "3djwr858LHmnvqnBsra5mN8iS0b72zRpIayymN-MoMA";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    HTMLFormControlsCollection.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPhotos();
