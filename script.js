function startGame() {
    alert("Сапар басталды! (Келесі бетте бірінші эпизод болады)");
    // Здесь потом будет переход на следующий эпизод
  }

  function toggleInfo() {
    const box = document.getElementById('infoBox');
    box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
  }

  function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const isOpen = menu.style.transform === 'translateX(0%)';
  
    menu.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0%)';
  }

  
  