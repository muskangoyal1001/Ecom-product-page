function swapImage(thumbnail) {
  const largeImage = document.getElementById('currentImage');
  const largeImageSrc = largeImage.src;
  largeImage.src = thumbnail.src;

  thumbnail.src = largeImageSrc;
}


function updateQuantity(amount) {
  const quantityInput = document.getElementById('productQuantity');
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity += amount;
  if (currentQuantity < 0) {
    currentQuantity = 0;
  }
  quantityInput.value = currentQuantity;
}

