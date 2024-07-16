
const address = document.querySelector(".address");
const searchBtn = document.getElementById("searchBtn");

// const shop = document.getElementById("stores").value;
// const geolocationUrl = "https://geocode.maps.co/search?q="+ shop +"%Waitrose&api_key=6692a4fd8d682874831065wvp302f3c";

function createHTML(data){
    const dataArray = data.split(", ");
    let html = "<ol>"
    for(let i = 0; i < dataArray.length; i++){
        html += `<li>${dataArray[i]}</li>`;
    }
    html += "</ol>";
    return html;
}

searchBtn.addEventListener("click", (event) => {
    const shop = document.getElementById("stores").value;
    const geolocationUrl = "https://geocode.maps.co/search?q="+ shop +"%Waitrose&api_key=6692a4fd8d682874831065wvp302f3c";
    fetch(geolocationUrl)
    .then(response => response.json())
    .then((data) => {
        address.innerHTML = createHTML(data[0].display_name);
    })
    .catch(err => address.innerHTML = "We could not find this address. Try google. \n" + err)
    .finally(event.target.remove());
});


// searchBtn.addEventListener("click", (event) => {
//     const shop = document.getElementById("stores").value;
//     const geolocationUrl = "https://geocode.maps.co/search?q="+ shop +"%Waitrose&api_key=6692a4fd8d682874831065wvp302f3c";
//     fetch(geolocationUrl)
//     .then(response => response.json())
//     .then((data) => {
//         address.innerHTML = `<p>${data[0].display_name}</p>`;
//     })
//     .catch(err => address.innerHTML = "We could not find this address. Try google. \n" + err)
//     .finally(event.target.remove());
// });

// fetch(geolocationUrl)
//     .then(response => response.json())
//     .then((data) => {
//         address.innerHTML = `<p>${data[0].display_name}</p>`;
//     })
//     .catch(err => console.log(err));

