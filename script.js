function swapImage(thumbnail) {
    // Get the current large image
    const largeImage = document.getElementById('currentImage');
    
    // Get the src of the current large image
    const largeImageSrc = largeImage.src;
    
    // Swap the large image with the thumbnail
    largeImage.src = thumbnail.src;
    
    // Swap the thumbnail with the previous large image
    thumbnail.src = largeImageSrc;
  }
  // script.js

 // Function to update the quantity
 function updateQuantity(amount) {
  const quantityInput = document.getElementById('productQuantity');
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity += amount;
  if (currentQuantity < 0) {
    currentQuantity = 0;
  }
  quantityInput.value = currentQuantity;
}
  
