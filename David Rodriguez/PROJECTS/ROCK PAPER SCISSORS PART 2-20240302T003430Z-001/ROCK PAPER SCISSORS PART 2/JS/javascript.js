document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('startNextRound').addEventListener('click', startNextRound);

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let currentStreak = 0;
let maxStreak = 0;
let username = '';

function startGame() {

    username = document.getElementById('usernameInput').value;
    if (username) {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        document.getElementById('rankingScreen').style.display = 'none'; 
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        currentStreak = 0;
        maxStreak = 0;
        updateScoreboard();
        saveGameData(username, maxStreak);
    } else {
        alert('Please enter a username.');
    }
}


function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('playerChoice').innerHTML = `YOU: <i class="far fa-hand-${playerChoice}" alt="${playerChoice}" style="font-size: 60px; color:  rgb(186, 209, 254);"></i>`;
    document.getElementById('computerChoice').innerHTML = `IA: <i class="far fa-hand-${computerChoice}" alt="${computerChoice}" style="font-size: 60px; color:  rgb(186, 209, 254);"></i>`;

    if (playerChoice === computerChoice) {
        document.getElementById('result').textContent = 'It\'s a tie!';
        ties++;
        currentStreak = 0;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
        document.getElementById('result').textContent = 'You win!';
        playerScore++;
        currentStreak++;
    } else {
        document.getElementById('result').textContent = 'You lose!';
        computerScore++;
        currentStreak = 0;
        saveGameData(username, currentStreak);
        showRanking();
        return;
    }
    maxStreak = Math.max(maxStreak, currentStreak); 
    updateScoreboard();
    saveGameData(username, maxStreak);
}

function saveGameData(username, currentStreak) {
    let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    const existingUserIndex = ranking.findIndex(user => user.username === username);
    if (existingUserIndex !== -1) {
        ranking[existingUserIndex].maxStreak = Math.max(ranking[existingUserIndex].maxStreak, currentStreak);
    } else {
        ranking.push({ username, maxStreak: currentStreak });
    }
    localStorage.setItem('ranking', JSON.stringify(ranking));
}

function showRanking() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('rankingScreen').style.display = 'block';
    
    let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.sort((a, b) => b.maxStreak - a.maxStreak); 
    const rankingList = document.getElementById('rankingList');
    rankingList.innerHTML = '';
    ranking.forEach(user => {
        const listItem = document.createElement('div');
        listItem.textContent = `${user.username}: - ${user.maxStreak}`;
        rankingList.appendChild(listItem);
    });
}

function updateScoreboard() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('ties').textContent = ties;
    document.getElementById('maxStreak').textContent = maxStreak;
}

function startNextRound() {
    document.getElementById('rankingScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
}