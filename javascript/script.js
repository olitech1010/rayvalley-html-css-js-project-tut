/**
 * ============================================
 * HAMBURGER MENU FUNCTIONALITY
 * ============================================
 * 
 * This script handles the mobile hamburger menu that slides in from the right.
 * It toggles the menu open/close when the hamburger icon or close button is clicked.
 */

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to DOM elements
    // Hamburger icon - the button that opens the menu
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    // Mobile menu overlay - the sliding menu panel
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Close button - the X button inside the menu
    const closeMenuBtn = document.getElementById('close-menu');
    
    // Backdrop - the dark overlay behind the menu
    const menuBackdrop = document.getElementById('menu-backdrop');
    
    /**
     * Function to open the mobile menu
     * Adds 'active' class to menu and backdrop to make them visible
     */
    function openMenu() {
        mobileMenu.classList.add('active');
        menuBackdrop.classList.add('active');
        // Prevent body scrolling when menu is open
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Function to close the mobile menu
     * Removes 'active' class from menu and backdrop to hide them
     */
    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuBackdrop.classList.remove('active');
        // Restore body scrolling when menu is closed
        document.body.style.overflow = '';
    }
    
    // Event listener: Click hamburger icon to open menu
    hamburgerIcon.addEventListener('click', function() {
        openMenu();
    });
    
    // Event listener: Click close button (X) to close menu
    closeMenuBtn.addEventListener('click', function() {
        closeMenu();
    });
    
    // Event listener: Click backdrop (dark area) to close menu
    menuBackdrop.addEventListener('click', function() {
        closeMenu();
    });
    
    // Event listener: Close menu when clicking on menu links
    // This provides better UX - menu closes after user selects a link
    const menuLinks = document.querySelectorAll('.mobile-nav a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Event listener: Close menu when pressing Escape key
    // This is a common UX pattern for modals and menus
    document.addEventListener('keydown', function(event) {
        // Check if Escape key was pressed and menu is open
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Optional: Close menu when window is resized to desktop size
    // This ensures menu doesn't stay open if user resizes browser
    window.addEventListener('resize', function() {
        // Check if window is wider than mobile breakpoint (750px)
        if (window.innerWidth > 750) {
            closeMenu();
        }
    });
    
});

