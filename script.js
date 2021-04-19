const tmiBtn = document.querySelector('#tmibtn');
const closeBtn = document.querySelector('#closebtn');
const tmi = document.querySelector('#tmi');

tmiBtn.addEventListener('click', function() {
    tmi.style.display = 'inherit';
    tmiBtn.style.display = 'none'; 
});

closeBtn.addEventListener('click', function() {
    tmi.style.display = 'none';
    tmiBtn.style.display = 'inherit'; 
});



window.addEventListener('scroll', scrollDownHandle);

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function scrollDownHandle() {
    const elems = document.querySelectorAll('.scrolldown');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
  }