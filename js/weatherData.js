//const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m";

// const searchBtn = document.getElementById("searchBtn");
// const storeName = document.getElementById("stores");
// const geolocationUrl = "https://geocode.maps.co/search?q=" + storeName.value + "&api_key=6692a4fd8d682874831065wvp302f3c";

// function hourly(arr){
//     for(let i = 0; i < 24; i++){
//         console.log(arr[i]);
//     }
// }
const tempInfo = document.querySelector(".tempInfo");

function currentTime(){
    let currDate = new Date();
    return currDate.getHours();
}

function tempHtml(t){
    let html = "Attention: the temperature at the selected location in 2 hours time will be: " + t + "C";
    tempInfo.innerHTML = html;
}

function getJSON(url){
    return new Promise((resolve, reject ) => {
        var bob = new XMLHttpRequest();
        bob.open('GET', url);
        bob.onload = () => {
            if(bob.status === 200){
                let data = JSON.parse(bob.responseText);
                resolve(data);
            } else {
                reject(Error(bob.statusText));
            }
        }
        bob.onerror = () => (Error("No internet connectivity."));
        bob.send();
    });
}

searchBtn.addEventListener( "click", () => {
    let storeName = document.getElementById("stores");
    if(storeName.value !== ""){
        const geolocationUrl = "https://geocode.maps.co/search?q=" + storeName.value + "%England%Waitrose&api_key=6692a4fd8d682874831065wvp302f3c";
    getJSON(geolocationUrl)
        .then(val => getJSON("https://api.open-meteo.com/v1/forecast?latitude="+ val[0].lat +"&longitude="+ val[0].lon +"&hourly=temperature_2m"))
        .then(weatherInfo => tempHtml(weatherInfo.hourly.temperature_2m[currentTime() + 2]))
        .catch(err => console.log(err));
    } else {
        alert("Choose a store from select menu.");
    }
});


