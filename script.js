

$(document).ready(function(){
    $(".bottom-line-input").on("focusin",function(){
        $(this).parent().find("label").addClass("active");
        
    })
    $(".bottom-line-input").on("focusout",function(){
        if(!this.value)
        {
            $(this).parent().find("label").removeClass("active");
        }   
    })
  
    function updateButtonState() {
        if ($("#termsCheck").prop('checked')) {
            $('.btn.contact.save').removeClass("disabled").prop('disabled', false);
        } else {
            $('.btn.contact.save').addClass("disabled").prop('disabled', true);
        }
    }

    // Initial check when the page loads
    updateButtonState();

    // Update button state whenever the checkbox changes
    $("#termsCheck").change(function() {
        updateButtonState();
    });

    function currentSlide(index) {
        // Remove active class from all dots
        $('.dot').removeClass('activedot');

        // Add active class to the clicked dot
        $(`.dot:nth-child(${index})`).addClass('activedot');
    }
    
});
function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}

