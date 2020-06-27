window.onload = () => {
  const progress = document.getElementById("progress");
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop;
    let scrollProgress = (scrollPosition / height) * 100;
    progress.style.height = scrollProgress + "%";
  };
};
