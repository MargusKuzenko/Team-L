const profilePic = document.getElementById('profilePic');
const dropdown = document.getElementById('dropdown');

// Dropdown visible when clicked
profilePic.addEventListener('click', function() {
    // Check if already opened or not
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none'; // Close if open
    } else {
        dropdown.style.display = 'block'; // Open if closed
    }
});
