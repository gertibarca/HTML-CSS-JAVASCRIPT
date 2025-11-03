
$(document).ready(function () {

    
    $(".hamburger").click(function () {
        $(".nav-menu").toggleClass("active");
        $(this).toggleClass("open");
    });

    
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }

        
        if ($(this).scrollTop() > 500) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });

    
    $(".nav-link").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            $(".nav-menu").removeClass("active");
        }
    });

    
    $("body").append('<button class="scroll-top">↑</button>');

    $(".scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    $(".scroll-top").css({
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#FFD700",
        color: "#002F6C",
        border: "none",
        padding: "0.8rem 1.2rem",
        borderRadius: "50%",
        fontSize: "1.2rem",
        cursor: "pointer",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        display: "none",
        zIndex: "1000",
        transition: "all 0.3s ease"
    }).hover(function () {
        $(this).css({ background: "#e6c300" });
    }, function () {
        $(this).css({ background: "#FFD700" });
    });

    
    function animateOnScroll() {
        $(".fade-up, .fade-in, .slide-left, .slide-right").each(function () {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) {
                $(this).addClass("visible");
            }
        });
    }

    $(window).on("scroll", animateOnScroll);
    animateOnScroll();

    
    $(".news-card, .player-card, .legend-card").hover(function () {
        $(this).css({
            transform: "translateY(-8px)",
            boxShadow: "0 15px 25px rgba(0,0,0,0.2)"
        });
    }, function () {
        $(this).css({
            transform: "translateY(0)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        });
    });

    
    $("body").append(`
        <div class="theme-toggle">
            <i class="fas fa-sun"></i>
        </div>
    `);

    $(".theme-toggle").css({
        position: "fixed",
        bottom: "30px",
        left: "30px",
        background: "#002F6C",
        color: "white",
        padding: "0.8rem",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: "1000",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        fontSize: "1.2rem"
    }).hover(function () {
        $(this).css({ background: "#00408F" });
    }, function () {
        $(this).css({ background: "#002F6C" });
    });

    let darkMode = false;

    $(".theme-toggle").click(function () {
        darkMode = !darkMode;
        if (darkMode) {
            $("body, .header, .footer, .news-card, .player-card, .legend-card").css({
                backgroundColor: "#1a1a1a",
                color: "#f1f1f1"
            });
            $(".theme-toggle i").removeClass("fa-sun").addClass("fa-moon");
        } else {
            $("body, .header, .footer, .news-card, .player-card, .legend-card").attr("style", "");
            $(".theme-toggle i").removeClass("fa-moon").addClass("fa-sun");
        }
    });

    
    $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        let valid = true;

        $(this).find("input[required], textarea[required]").each(function () {
            if (!$(this).val().trim()) {
                $(this).css("border-color", "#ff4444");
                valid = false;
            } else {
                $(this).css("border-color", "#00C851");
            }
        });

        if (valid) {
            $(this).fadeOut(300, function () {
                $(this).html("<h3 style='color:#00C851;text-align:center;'>Mesazhi u dërgua me sukses! ✅</h3>").fadeIn(300);
            });
        } else {
            alert("Ju lutem plotësoni të gjitha fushat e detyrueshme!");
        }
    });

    
    $(".section-title, .stat-card, .news-card, .player-card, .legend-card, .contact-form-container").addClass("fade-up");

});
