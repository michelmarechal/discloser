const arrowClick = document.querySelector('.fa-arrow-down');
let arrowClickCount = 0;


arrowClick.addEventListener('click', function(){
      const selectGifParent = document.querySelector('.disclose-gif');
      const gifHTML = ``;
      if (arrowClickCount == 0){
            selectGifParent.innerHTML += gifHTML;
            arrowClickCount++;
      }
});
