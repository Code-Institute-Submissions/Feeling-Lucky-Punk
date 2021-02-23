// email.js service was used for this code.

 function sendMail(contactForm) {
    emailjs.send("service_iyowll8", "Movie-Quote", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "movie": contactForm.movie.value,
            "quote": contactForm.quote.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false;
}