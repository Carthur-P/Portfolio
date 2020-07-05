window.onload = () => {
  //progress bar conponents
  const progress = document.getElementById("progress");
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //change progress bar on page scrolling
  window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop;
    let scrollProgress = (scrollPosition / height) * 100;
    progress.style.height = scrollProgress + "%";
  };

  //project horizontal scroll conponents
  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");
  const scrollContainer = document.querySelector(".horizontalScrollContainer");
  // let visibleContainer = scrollContainer.offsetWidth;
  // let invisibleContainer = getInvisibleContainer();

  // //get width value of the content hidden in scroll
  // function getInvisibleContainer(){
  //   return document.querySelector(".projectContainer").offsetWidth - visibleContainer - 100;
  // }

  //scrolling right on right button click
  rightButton.onclick = () => {
    scrollContainer.scrollLeft += 600;
  };

  //scrolling left on left button click
  leftButton.onclick = () => {
    scrollContainer.scrollLeft -= 600;
  };

  //contact form component
  const form = document.getElementById("contactForm")

  //making sure form is reset
  form.reset();
};
