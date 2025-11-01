export function getPlayers() {
  return JSON.parse(localStorage.getItem('players')) || [];
}

export function savePlayer(name, score) {
  const players = getPlayers();
  players.push({ name, score });
  localStorage.setItem('players', JSON.stringify(players));
}

export function showPlayers() {
  const players = getPlayers();
  const list = document.getElementById('scores-list');
  list.innerHTML = '';

  players.forEach((player) => {
    const li = document.createElement('li');
    li.textContent = `${player.name} : ${player.score}`;
    list.appendChild(li);
  });
}
