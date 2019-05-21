let x = Math.floor(Math.random() * 190);
let y = Math.floor(Math.random() * 190);
let z = Math.floor(Math.random() * 190);
let r = Math.floor(Math.random() * 190);
let myList = [];

console.log(x);
console.log(y);
console.log(z);
console.log(r);

function getTeams(e) {
    e.preventDefault();
    let baseURL = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=England"
    //console.log(e)
    fetch(baseURL)
        .then(function (result) {
            //console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            dataBase(json);
        })
}
function dataBase(json) {
    myList.push(json.teams[x]);
    myList.push(json.teams[y]);
    myList.push(json.teams[z]);
    myList.push(json.teams[r]);
    console.log(myList);

    
    for (let i = 0; i < myList.length; i++) {
        let picture = document.createElement('img');
        let selected = document.getElementById('box');
        selected.setAttribute('class', 'col-xs-3');
        picture.src = myList[i].strTeamBadge;
        selected.appendChild(picture);
    }
}