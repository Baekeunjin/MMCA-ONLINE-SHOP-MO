// //jQuery
// //eq(0) => eq는 n번째 라는 메소드

$('.gnb > li').mouseover(function(){
  $(this).find('.box').stop().fadeIn(300);
})
$('.gnb > li').mouseleave(function(){
  $(this).find('.box').stop().fadeOut(300);
})


const trigger = document.querySelector('.trigger');
const sideMenu = document.querySelector('.side_menu_wrap');
const mainHide = document.querySelector('section');
const sliderCon = document.querySelector('.wrap');
const footHide = document.querySelector('footer');
console.log('푸터입니다',footHide);

trigger.addEventListener('click',function(){
  if(!trigger.classList.contains('on')) { 
    //클라스 on이 없을 때 (!로 반대 표시),
    //클릭을 했는데 on이 없으면 on을 추가하고 on이 있으면 on 빼기
    trigger.classList.add('on');
    sideMenu.style.transform = 'translateX(0)';
    mainHide.style.display = 'none';
    sliderCon.style.opacity = '0';
    footHide.style.opacity = '0';
  } else {
    trigger.classList.remove('on');
    sideMenu.style.transform = 'translateX(-100%)';
    mainHide.style.display = 'block';

    sliderCon.style.opacity = '1';
    footHide.style.opacity = '1';
  }
})


  const imgWidth = $('.wrap > .sl').width();  //css가 적용된 이후의 크기
  const imgNumber = $('.wrap > .sl').length;  //이미지의 갯수
  const sliderWrap = $('.wrap');
  const slidess = $('.wrap > .sl')  //각각의 슬라이드
  const dotBtn = $('.dots > button');

// 슬라이드 가로 배열

$(slidess).eq(0).siblings().hide;
let slideIndex = 0;

setInterval(function(){
  if(slideIndex<4){
    slideIndex++;
  } else {
    slideIndex=0;
  }
$(slidess).eq(slideIndex).siblings().fadeOut(800);
$(slidess).eq(slideIndex).fadeIn(800);
},3000);

const toTop = document.querySelector(".top_to_btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    toTop.classList.add('on')
  } else {
    toTop.classList.remove('on')
  }
});

toTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});





