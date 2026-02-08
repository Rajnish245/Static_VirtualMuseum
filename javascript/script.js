/* Ticket Form Validation */
const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {
    ticketForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const count = document.getElementById("count").value.trim();
        const date = document.getElementById("date").value.trim();

        if (name === "" || email === "" || count === "" || date === "") {
            alert("Please fill all fields");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter valid email");
            return;
        }

        if (count <= 0) {
            alert("Ticket count must be at least 1");
            return;
        }

        alert("Ticket booked successfully!");
        ticketForm.reset();
    });
}


/* Contact Form Validation */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("cname").value.trim();
        const email = document.getElementById("cemail").value.trim();
        const msg = document.getElementById("cmessage").value.trim();

        if (name === "" || email === "" || msg === "") {
            alert("Please fill all fields");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter valid email");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
}
function toggleMenu(){
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}
