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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY >500){
    //배지 숨기기
    // gsap.to(요소, 지속시간 , 옵션);
    gsap.to(badgeEl, .6,{
      opacity:0,
      display:'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2,{
      x:0
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6,{
      opacity:1,
      display:'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2,{
      x:100
    });
  }
},300));
//_.throttle(함수, 시간밀리세컨드단위로)


toTopEl.addEventListener('click', function(){
  gsap.to(window,.7,{
    scrollTo: 0
  })
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  // gsap.to(요소, 지속시간 , 옵션);
  gsap.to(fadeEl,1,{
    delay:(index+1)*.7,
    opacity:1
  });
});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
}); //생성자 (클래스) 자바스크립트 문법으로 스와이퍼라는 함수를 실행을 한다.

new Swiper('.promotion .swiper-container',{
  slidesPerView:3, //한번에 보여주겠따 3개를 
  spaceBetween:10, //슬라이드 사이의 여백
  centeredSlides:true, //1번 슬라이드가 가운데 보이기
  loop:true, //반복값 트루
  autoplay:{ //오토 자동으로 5초걸림
    delay:5000
  },
  pagination:{ //페이지 번호를 사용 여부
    el:'.promotion .swiper-pagination', //페이지 번호요소 선택자
    clickable:true,//사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation:{ //슬라이드 이전/다음 버튼 사용여부
    prevEl:'.promotion .swiper-prev', //이전 버튼 선택자
    nextEl:'.promotion .swiper-next' //다음 버튼 선택자
  }
});

new Swiper('.awards .swiper-container',{
  // direction:'horizontal'
  autoplay:true,
  loop:true, 
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next',
  }
});


const promotionEl = document.querySelector('.promotion'); //promotion 클래스를 찾아서 promotion 객체 생성
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotin =false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotin = !isHidePromotin //!는 그값의 반대의 값을 반환
  if(isHidePromotin){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }

});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector,delay,size){
  //gsap.to(요소, 시간 , 옵션);
  gsap.to(
    selector, //선택자
     random(1.5,2.5), //애니메이션 동작 시간
  { //옵션
    y:size,
    repeat:-1,
    yoyo:true,
    ease: "power1.inOut",
    delay:random(0,delay)
  });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls =document.querySelectorAll('section .scroll-spy');
  spyEls.forEach(function(spyEl){
    new ScrollMagic
      .Scene({ //감시할 장면에 scene을 추가
        triggerElement:spyEl, //보여짐의 여부를 감시할 요소를 지정
        triggerHook:.8 //화면에 80퍼 지점에서 보여짐 여부를 감시
      })
      .setClassToggle(spyEl, 'show') //요소가 화면에 보이면 show 클래스를 추가
      .addTo(new ScrollMagic.Container()); //컨트롤러에 장면을 할당 (필수!)
  });


  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();//2022