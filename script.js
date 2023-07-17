const buttonElement = document.getElementById("getButton");
const contentElement = document.getElementById("content");

function showPicture()  {
    const picture = document.createElement("img");
    picture.src = "https://uploads0.wikiart.org/images/leonardo-da-vinci.jpg!Portrait.jpg";
    contentElement.append(picture);
    setTimeout( () => contentElement.remove(), 5000);
};

buttonElement.addEventListener('click', showPicture);