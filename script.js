// Splash Screen Click to Load Content
document.getElementById('splash').addEventListener('click', function () {
    // Hide the splash screen
    document.getElementById('splash').style.display = 'none';
    // Show the main content
    document.getElementById('main-content').style.display = 'block';
    // Enable scrolling
    document.body.style.overflow = 'auto';
    // Smooth scroll to the About Me section
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});
