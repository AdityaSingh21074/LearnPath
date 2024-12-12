(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    function searchFunction() {
        var searchQuery = document.getElementById('search-bar').value.toLowerCase();
        var resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear previous results
        resultsContainer.style.display = 'none'; // Hide results initially
    
        // Predefined list of courses (you can replace this with dynamic data if needed)
        var courses = [
            { name: 'Course 1', description: 'Learn the basics of web development.' },
            { name: 'Course 2', description: 'An advanced guide to JavaScript programming.' },
            { name: 'Course 3', description: 'Mastering Python for Data Science.' },
            { name: 'Course 4', description: 'Introduction to Machine Learning and AI.' },
            // Add more courses here...
        ];
    
        // Loop through the courses and match the search query
        var filteredCourses = courses.filter(function(course) {
            return course.name.toLowerCase().includes(searchQuery) || course.description.toLowerCase().includes(searchQuery);
        });
    
        // If matching courses are found, display them
        if (filteredCourses.length > 0) {
            resultsContainer.style.display = 'block'; // Show results container
            filteredCourses.forEach(function(course) {
                var courseDiv = document.createElement('div');
                courseDiv.classList.add('course-item');
                courseDiv.innerHTML = `<h5>${course.name}</h5><p>${course.description}</p>`;
                resultsContainer.appendChild(courseDiv);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        }
    }
    
    
})(jQuery);

