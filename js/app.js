
function buttonDisabled (btnID){
    const btndisable = document.getElementById(btnID);
    btndisable.setAttribute('disabled')
}


document.getElementById('btn-messi').addEventListener('click', function(x){
    const playerName = document.getElementById('messi-name');


    const selectedPlayers = document.getElementById('selected-players');

    const li = document.createElement ('li')

    li.innerText = playerName.innerText;

    selectedPlayers.appendChild(li);
    x.target.disabled = true;
})