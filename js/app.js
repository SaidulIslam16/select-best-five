function selectPlayer(playerId) {
    const playerName = document.getElementById(playerId);


    const selectedPlayers = document.getElementById('selected-players');

    const li = document.createElement('li')

    li.innerText = playerName.innerText;

    const selectedPlayersList = document.querySelectorAll('li')
    if(selectedPlayersList.length>4){
        alert('5 Player already selected');
        return
    }
    else{
        selectedPlayers.appendChild(li);
    }

}


// Messi
document.getElementById('btn-messi').addEventListener('click', function (x) {
    selectPlayer('messi-name');
    x.target.disabled = true;
})

// Naymer
document.getElementById('btn-neymar').addEventListener('click', function (x) {
    selectPlayer('neymar-name');
    x.target.disabled = true;
})
// Mbapee
document.getElementById('btn-mbappe').addEventListener('click', function (x) {
    selectPlayer('mbappe-name');
    x.target.disabled = true;
})
// Machado
document.getElementById('bnt-machado').addEventListener('click', function (x) {
    selectPlayer('machado-name');
    x.target.disabled = true;
})
// Ramos
document.getElementById('btn-ramos').addEventListener('click', function (x) {
    selectPlayer('ramos-name');
    x.target.disabled = true;
})
// Renato
document.getElementById('btn-renato').addEventListener('click', function (x) {
    selectPlayer('renato-name');
    x.target.disabled = true;
})

const playersSelected = document.getElementById('selected-players');

console.log(playersSelected);