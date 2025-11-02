import './style.css';
import { setupForm } from './modules/formhandler.js';
import { getScores } from './modules/api.js';
import displayScores from './modules/display.js';

// initial render
document.addEventListener('DOMContentLoaded', async () => {
  setupForm();
  const scores = await getScores();
  displayScores(scores);
});
