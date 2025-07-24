function redirectToContact() {
    window.location.href = '#contact_us';
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "col-lg-4"
    var blogSectionItems = document.querySelectorAll('.blog-section .col-lg-4');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        blogSectionItems.forEach(function (item) {
            if (isInViewport(item) && !item.classList.contains('visible')) {
                item.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Trigger the handleScroll function on page load
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the class "col-xl-6" containing the text
    var aboutClubText = document.querySelector('.more-info-section .col-xl-6.d-flex');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(aboutClubText) && !aboutClubText.classList.contains('visible')) {
            aboutClubText.classList.add('visible');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Trigger the handleScroll function on page load
    handleScroll();
});
