        function initializeTouchSlider(containerId) {
          const profileContainer = document.getElementById(containerId);
          const profileImages = profileContainer.querySelector('.profile-images');
          let touchStartX;
          let scrollLeft;

          profileContainer.addEventListener('touchstart', (event) => {
              const touch = event.touches[0];
              touchStartX = touch.clientX;
              scrollLeft = profileContainer.scrollLeft;
              event.preventDefault();
          });

          profileContainer.addEventListener('touchmove', (event) => {
              if (!touchStartX) return;
              const touchCurrentX = event.touches[0].clientX;
              const touchDeltaX = touchCurrentX - touchStartX;
              profileContainer.scrollLeft = scrollLeft - touchDeltaX;
              event.preventDefault();
          });

          profileContainer.addEventListener('touchend', () => {
              touchStartX = null;
          });
      }
      initializeTouchSlider('profileContainer1');
      initializeTouchSlider('profileContainer2');
      let searchBar = document.getElementById('searchBar');
let page = document.getElementById('pages');
let shop = document.getElementById('shop');
let blog = document.getElementById('blog');
let icon = document.getElementById('searchIcon').addEventListener('click', function() {
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
        page.style.display = 'none';
        shop.style.display = 'none';
        blog.style.display = 'none';
    }else {
        searchBar.style.display = 'none';
        page.style.display = 'block';
        shop.style.display = 'block';
        blog.style.display = 'block';
    }
});

