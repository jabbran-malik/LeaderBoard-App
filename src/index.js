import './style.css';


const form = document.getElementById('score-form');
const inputName = document.getElementById('nameform');
const inputNumber = document.getElementById('scoreform');
const refbtn= document.getElementById('refresh-btn');

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
    alert(' Name must contain only letters');
    return;
  } else if (isNaN(score)) {
    alert(' Score must be a valid number');
    return;
  } else if (numericScore < 0 || numericScore > 100) {
    alert(' Score must be between 0 and 100');
    return;
  }

  alert(' Form submitted successfully');
  
  const players=JSON.parse(localStorage.getItem('players')) || [];
  players.push({name,score});
  localStorage.setItem('players',JSON.stringify(players));
  form.reset();
  showplayers();
})

function showplayers(){
      const players=JSON.parse(localStorage.getItem('players'))||[];
      const list=document.getElementById('scores-list')
      list.innerHTML="";


      players.forEach(player =>{
        const li =document.createElement('li')
        li.textContent=`${player.name} : ${player.score}`
        list.appendChild(li)
      })
}


// document.addEventListener('DOMContentLoaded',showplayers)
 refbtn.addEventListener('click',showplayers)












