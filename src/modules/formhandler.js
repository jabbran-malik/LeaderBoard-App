import { addScore, getScores } from './api.js';
import displayScores from './display.js';

export const setupForm = () => {
  const form = document.getElementById('score-form');
  const inputName = document.getElementById('nameform');
  const inputNumber = document.getElementById('scoreform');
  const refbtn = document.getElementById('refresh-btn');

  if (!form || !inputName || !inputNumber) {
    console.error('❌ Form or inputs not found in DOM');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = inputName.value.trim();
    const score = inputNumber.value.trim();

    if (!user || !score) {
      alert('Please fill all fields');
      return;
    }

    const res = await addScore(user, score);
    if (res?.result) {
      alert('✅ Score sent successfully!');
      form.reset();
    } else {
      alert('❌ Error sending score');
    }
  });

  refbtn.addEventListener('click', async () => {
    const scores = await getScores();
    displayScores(scores);
  });
};
