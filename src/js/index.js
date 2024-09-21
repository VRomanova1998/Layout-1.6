import '../scss/modal.scss';
import '../scss/aside.scss';
import '../scss/remont.scss';
import '../scss/table.scss';
import '../scss/brand.scss';
import '../scss/style.scss';

// настройка элементов списков брендов, услуг 

let buttonActiveAll = document.querySelectorAll('.button');
let listContainerAll = document.querySelectorAll('.list-item-container');
for (let i = 0; i<buttonActiveAll.length; i++) {
  let buttonActive = buttonActiveAll[i];
  let text = buttonActive.querySelector('span');
  let listContainer = listContainerAll[i];
  let listItemHidden = listContainer.querySelectorAll('.hidden-tablet');
  let listItemHiddenMonitor = listContainer.querySelectorAll('.hidden-monitor');

  buttonActive.addEventListener('click', function(){
    buttonActive.classList.toggle('button-active'); 
        for (let i = 0; i<listItemHidden.length; i++) {
         listItemHidden[i].classList.toggle('hidden-tablet');    
}
        for (let i = 0; i<listItemHiddenMonitor.length; i++) {
             listItemHiddenMonitor[i].classList.toggle('hidden-monitor');
}
        if (text.textContent === 'Скрыть') {
                 text.textContent = 'Показать все';
        }   else {
            text.textContent = 'Скрыть'; 
} });}

  
// скрытие и раскрытие текста

buttonText.addEventListener('click', function() {
    buttonText.classList.toggle('button-active'); 
if (window.innerWidth < 768) {
    mobileText.classList.toggle('text_hidden_mobile');
}
if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
  tabletText.classList.toggle('text_hidden_tablet');
}
if (window.innerWidth >= 1120)  {
  monitorText.classList.toggle('text_hidden_monitor');
}
if (buttonTextContent.textContent === 'Скрыть') {
  buttonTextContent.textContent = 'Читать далее';
}   else {
  buttonTextContent.textContent = 'Скрыть'; 
}
});

// настройка свайпера 

if (window.innerWidth < 768) {
  const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView:'auto',
     loop: true,
      });
  }

// настройка кнопки звонка и закрытия модалки

let call = document.querySelector('.call');
 
  callButton.addEventListener('click',function(){
    call.showModal();
  });

  callButtonAside.addEventListener('click', function () {
   call.showModal();
  });

  buttonClose.addEventListener('click', function () {
    call.close();
  });

  call.addEventListener('click', function(evt) {
   const callModal = evt.currentTarget;
   if (callModal) {
    call.close();
   }
  });

// настройка кнопки обратной связи и закрытия модалки

let feedback = document.querySelector('.feedback');

  feedbackButton.addEventListener('click',function(){
    feedback.showModal();
  });

  feedbackButtonAside.addEventListener('click', function () {
   feedback.showModal();
  });

  buttonCloseFeedback.addEventListener('click', function () {
    feedback.close();
  });

  feedback.addEventListener('click', function(evt) {
    const feedbackModal = evt.currentTarget;
    if (feedbackModal) {
     feedback.close();
    }
   });

// настройка асайда

let aside = document.querySelector('.aside');
let asideOpacity = document.querySelector('.container_opacity_aside');

buttonBurger.addEventListener('click', function(){
aside.classList.remove('aside_hidden');
asideOpacity.classList.add('container_opacity_aside_open');
});

buttonCloseAside.addEventListener('click',function(){
  aside.classList.add('aside_hidden');
  asideOpacity.classList.remove('container_opacity_aside_open');
});

asideOpacity.addEventListener('click', function(){
 aside.classList.add('aside_hidden');
 asideOpacity.classList.remove('container_opacity_aside_open');
});