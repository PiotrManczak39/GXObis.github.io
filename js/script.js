const searchBtn = document.getElementById("searchBtn");
const list = document.querySelector(".list");
const tailLift = document.querySelector(".tailLift");
const main = document.querySelector(".main");
const inputPass = document.getElementById("inputPass");
const passwordArea = document.querySelector(".pass");
const password = "Staffline";
const footer = document.querySelector("footer");
const getAddress = document.querySelector(".toAddress");
// const addressDiv = document.querySelector("address");

getAddress.style.display = "none";

function createHtml(arr){
    html = "<ul>";
    for(let i = 2; i < arr.length; i++){
        html += `<li>${arr[i]}</li>`; 
    }
    html += "</ul>";
    return html; 
}

const Droitwich = [
                "Droitwich",
                "Tail-lift not needed",
                "At the gate turn left", 
                "Go to junction 19",
                "enter M6",
                "Enter M42 South",
                "Enter M5 South",
                "Exit at junction 5",
                "Follow A38 West",
                "Turn left at the traffic lights"
            ];
const Kingsthorpe = [
                "Kingsthorpe",
                "Tail-lift needed",
                "At the gate turn left", 
                "Go to junction 14",
                "exit M1 at j15",
                "follow A45 North",
                "Exit at queen Eleanor interchange",
                "take the 2th exit",
                "Follow sighns for A508",
                "Store on the left after Starbacks"
            ];
const Oakgrove = [
                "Oakgrove",
                "Tail-lift not needed",
                "At the gate turn left", 
                "Take the third exit at the roundabout",
                "Take the first exit at the roundabout",
                "Take the second exit at the roundabout",
                "Take first on the right",
                "Follow the road",
                "Entry to the yard on the right"
            ]; 
const Wotton = [
                "Wotton",
                "Tail-lift needed",
                "At the gate turn left", 
                "Go to junction 14",
                "exit M1 at j15",
                "follow A45 North",
                "Exit at queen Eleanor interchange",
                "take the 4th exit",
                "Shop on the right"
            ];

const masterArray = [Droitwich, Kingsthorpe, Oakgrove, Wotton];

main.style.display = "none";
passBtn.addEventListener("click", () => {
    let attempt = inputPass.value;
    if(attempt == password){
        main.style.display = "block";
        passwordArea.style.display = "none";
    } else {
        alert("Oh dear. That was a wrong password. Try again.");
        inputPass.value = "";
    }
});


searchBtn.addEventListener("click", (event) => {
    event.target.textContent = "Loading...";
    const shop = document.getElementById("stores").value;
    for(let i = 0; i < masterArray.length; i++){
        
        if(masterArray[i][0] === shop){
            list.innerHTML = createHtml(masterArray[i]);
            if(masterArray[i][1] === "Tail-lift needed"){
                tailLift.innerHTML = "<h4>Attention: Tail lift needed for this store. Carry out additional checks. \n PLEASE</h4>";
                tailLift.style.display = "block";
            } else {
                tailLift.style.display = "none";
            }
            break;
        }
    }  
    if(shop !== ""){
        event.target.textContent = "Select another Store";
    } else {
        event.target.textContent = "Search for location";
    }
    if(shop === ""){
        getAddress.style.display = "none";
    } else {
        getAddress.style.display = "block";
    }
});


