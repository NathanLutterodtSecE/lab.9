$(document).ready(function() {
    // Filter functionality
    $(".filter-btn").on("click", function() {
        let category = $(this).data("category");
        
        $(".image-container").each(function() {
            if (category === "all" || $(this).data("category") === category) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    // Lightbox functionality
    $(".image-container img").on("click", function() {
        let imgSrc = $(this).attr("src");
        $("#lightbox-img").attr("src", imgSrc);
        $("#lightbox").fadeIn();
    });

    // Close lightbox
    $(".close").on("click", function() {
        $("#lightbox").fadeOut();
    });

    // Close lightbox on clicking outside the image
    $("#lightbox").on("click", function(e) {
        if (e.target === this) {
            $(this).fadeOut();
        }
    });
});
