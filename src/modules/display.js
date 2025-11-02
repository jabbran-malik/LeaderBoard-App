const displayScores = (scores) => {
  const ul = document.querySelector('#scores-list');
  ul.innerHTML = ''; // clear old list
  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.textContent = `${user}: ${score}`;
    ul.appendChild(li);
  });
};

export default displayScores;
