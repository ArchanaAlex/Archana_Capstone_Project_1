// your code goes here// Get the scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Listen to the window scroll event
window.onscroll = function () {
  // Get the offset position of the container2 section
  const container2 = document.getElementById('about');
  const container2Offset = container2.offsetTop;

  // Check if the page has been scrolled past container2
  if (document.body.scrollTop > container2Offset || document.documentElement.scrollTop > container2Offset) {
    scrollTopBtn.style.display = 'block'; // Show the button
  } else {
    scrollTopBtn.style.display = 'none'; // Hide the button
  }
};

// Function to scroll back to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
