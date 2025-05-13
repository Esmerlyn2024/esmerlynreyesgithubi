
let currentIndex = 0;
function moveCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  const totalImages = carouselImages.children.length;
  currentIndex = (currentIndex + 1) % totalImages;
  carouselImages.style.transform = `translateX(-${currentIndex * 320}px)`;
}
setInterval(moveCarousel, 3000); // Mover el carrusel cada 3 segundos

document.getElementById("toggle").addEventListener("click", function(e) {
  e.preventDefault();
  const submenu = document.getElementById("submenu");
  submenu.classList.toggle("hidden");
});






function agregarAlCarrito(nombre, precio) {
  const lista = document.getElementById('lista-carrito');
  const item = document.createElement('li');
  item.textContent = `${nombre} - $${precio}`;
  lista.appendChild(item);

  total += precio;
  document.getElementById('total').textContent = total;
}
