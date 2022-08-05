const searchEl= document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // 서치 인풋 요소앞에서 찾음


searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); //html의 속성을 지정함
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',''); //html의 속성을 지정함
});


  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();//2022