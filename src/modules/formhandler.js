import { savePlayer, showPlayers } from './storage.js';

export function setupForm() {
  const form = document.getElementById('score-form');
  const inputName = document.getElementById('nameform');
  const inputNumber = document.getElementById('scoreform');
  const refbtn = document.getElementById('refresh-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = inputName.value.trim();
    const score = inputNumber.value.trim();
    const namePattern = /^[A-Za-z\s]+$/;
    const numericScore = Number(score);

    if (name === '' || score === '') {
      alert('Fields are empty');
      return;
    } else if (!namePattern.test(name)) {
      alert('Name must contain only letters');
      return;
    } else if (isNaN(score)) {
      alert('Score must be a valid number');
      return;
    } else if (numericScore < 0 || numericScore > 100) {
      alert('Score must be between 0 and 100');
      return;
    }

    savePlayer(name, score);
    form.reset();
    showPlayers();
  });

  document.addEventListener('DOMContentLoaded', showPlayers);
  refbtn.addEventListener('click', showPlayers);
}
