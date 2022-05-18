
// UpSplash Api
const count =10;
const apiKey = `-W-AnqfDbZQpDH3CLMpFUnaI5lAFda-aRkFT35ZX5oE`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error){
        // Catch Error Here
    }
}

// On Load
getPhotos();