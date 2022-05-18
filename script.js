const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// UpSplash Api
const count = 10;
const apiKey = `-W-AnqfDbZQpDH3CLMpFUnaI5lAFda-aRkFT35ZX5oE`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Helper function to Set Attributes on DOM Elements
function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos(){
    // Create function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.link.html, 
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.html,
            alt: photo.description,
            title: photo.description,
        });  
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get Photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos ();
    } catch(error){
        // Catch Error Here
    }
}

// On Load
getPhotos();