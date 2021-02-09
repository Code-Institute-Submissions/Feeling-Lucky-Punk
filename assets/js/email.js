function sendMail(contactForm) {
    emailjs.send("service_iyowll8","Movie-Quote", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
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
    return false;  // To block from loading a new page
}

console.log("hello friend")