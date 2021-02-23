// email.js service was used for this code.

 function sendMail(contactForm) {
    emailjs.send("service_6abu8pu","movie-quote", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "movie": contactForm.movie.value,
            "quote": contactForm.quote.value
        })
        .then(
            function(response) {
                alert("SUCCESS", response);
            },
            function(error) {
                alert("FAILED", error);
            }
        );
    return false;
}