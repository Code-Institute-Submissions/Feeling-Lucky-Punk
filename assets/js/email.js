// email.js service was used for this code.

<script type="text/javascript">
        window.onload = function() {
            document.getElementById('quote-form').addEventListener('submit', function(event) {
                event.preventDefault();
                
                this.contact_number.value = Math.random() * 100000 | 0;
               
                emailjs.sendForm('service_iyowll8', 'Movie-Quote', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            })
        };
    </script>

console.log("hello friend")