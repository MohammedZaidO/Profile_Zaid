// Comprehensive Debug Script for Navigation Issues
console.log("=== NAVIGATION DEBUG START ===");

// Check if DOM is loaded
if (document.readyState === 'loading') {
    console.log("DOM still loading...");
    document.addEventListener('DOMContentLoaded', runDebug);
} else {
    console.log("DOM already loaded");
    runDebug();
}

function runDebug() {
    console.log("=== RUNNING DEBUG ===");
    
    // 1. Check if elements exist
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
    
    console.log("Navigation Links Found:", navigationLinks.length);
    console.log("Pages Found:", pages.length);
    
    // 2. Log all navigation links
    navigationLinks.forEach((link, index) => {
        console.log(`Link ${index + 1}:`, {
            text: link.textContent,
            classes: link.className,
            hasActive: link.classList.contains('active')
        });
    });
    
    // 3. Log all pages
    pages.forEach((page, index) => {
        console.log(`Page ${index + 1}:`, {
            dataset: page.dataset.page,
            classes: page.className,
            hasActive: page.classList.contains('active'),
            display: window.getComputedStyle(page).display,
            visibility: window.getComputedStyle(page).visibility
        });
    });
    
    // 4. Check CSS rules
    const styleSheets = Array.from(document.styleSheets);
    console.log("StyleSheets loaded:", styleSheets.length);
    
    // 5. Test click events
    navigationLinks.forEach((link, index) => {
        link.addEventListener("click", function(e) {
            console.log(`=== CLICK EVENT ${index + 1} ===`);
            console.log("Clicked:", this.textContent);
            console.log("Event target:", e.target);
            console.log("Current classes:", this.className);
            
            // Check if the click is being registered
            this.style.backgroundColor = 'red';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 500);
        });
    });
    
    // 6. Check for JavaScript errors
    window.addEventListener('error', function(e) {
        console.error("JavaScript Error:", e.error);
        console.error("Error details:", {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
        });
    });
    
    // 7. Test article visibility
    pages.forEach(page => {
        const computedStyle = window.getComputedStyle(page);
        console.log(`Page ${page.dataset.page} visibility:`, {
            display: computedStyle.display,
            visibility: computedStyle.visibility,
            opacity: computedStyle.opacity,
            height: computedStyle.height,
            width: computedStyle.width
        });
    });
    
    // 8. Force show all articles for testing
    console.log("=== FORCING ALL ARTICLES VISIBLE ===");
    pages.forEach(page => {
        page.style.display = 'block';
        page.style.visibility = 'visible';
        page.style.opacity = '1';
        page.style.border = '3px solid green';
        page.style.margin = '10px';
        page.style.padding = '10px';
    });
    
    console.log("=== DEBUG COMPLETE ===");
}

// Additional error catching
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error("Global Error Handler:", {
        message: msg,
        url: url,
        lineNo: lineNo,
        columnNo: columnNo,
        error: error
    });
    return false;
}; 