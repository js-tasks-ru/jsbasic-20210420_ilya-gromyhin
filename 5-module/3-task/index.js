function initCarousel() {
  let leftButton = document.querySelector('.carousel__arrow_left');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let inner = document.querySelector('.carousel__inner');
  let innerWidth = inner.offsetWidth;
  let currentOffset = 0;
  let currentSlaid = 1;
  currentSlaid == 1 ? leftButton.style.display = 'none' : leftButton.style.display = '';
  
  rightButton.onclick = function () {
    currentSlaid += 1;
    currentSlaid == 1 ? leftButton.style.display = 'none' : leftButton.style.display = '';
    currentSlaid == 4 ? this.style.display = 'none' : this.style.display = '';
  
    inner.style.transform = `translateX(${currentOffset - innerWidth}px)`;
    currentOffset -=innerWidth;
  
}
leftButton.onclick = function () {
  currentSlaid -= 1
  currentSlaid == 1 ? this.style.display = 'none' : this.style.display = '';
  currentSlaid == 4 ? rightButton.style.display = 'none' : rightButton.style.display = '';
  inner.style.transform = `translateX(${currentOffset + innerWidth}px)`;
  currentOffset +=innerWidth;
  
}



}
