let counter = document.querySelector('.counter');

const lowerCount = document.querySelector('#lowerCountButton');

const addCount = document.querySelector('#addCountButton');

let count = 0;

addCount.addEventListener('click', increaseCount);

lowerCount.addEventListener('click', reduceCount);

function increaseCount() {
  count++
  counter.innerHTML = count;
  if(counter.innerHTML > '0'){
    counter.style.color = 'green';
  } 
  else if(counter.innerHTML === '0'){
    counter.style.color = 'black';
  }

}

function reduceCount(){
  count--
  counter.innerHTML = count;
  if(counter.innerHTML < '0'){
    counter.style.color = 'red';
  }
  else if(counter.innerHTML === '0'){
    counter.style.color = 'black';
  }
}