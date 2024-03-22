let clickCount = 0;

const handleClick = () => {
  clickCount += 1;
  console.log(clickCount);
  
  if (clickCount == 3) {
    document.querySelector(".development-feature").classList.toggle("hidden"); 
    clickCount = 0;
  }
};

document.querySelector("#header-logo").addEventListener("click", handleClick)