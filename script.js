// Select an event from the event card
function selectEvent(eventName) {

    // Select the registration dropdown
    const eventSelect =
        document.getElementById("eventSelect");

    // Set selected event
    eventSelect.value = eventName;

    // Scroll to registration form
    document.getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Registration form
const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();

        const name =
            document.getElementById("studentName").value;

        const selectedEvent =
            document.getElementById("eventSelect").value;

        const message =
            document.getElementById(
                "registrationMessage"
            );

        message.textContent =
            "Thank you " +
            name +
            "! You have successfully registered for " +
            selectedEvent + ".";

        message.style.color = "green";

        // Clear form
        registrationForm.reset();
    }
);


// Contact form
const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value;

        const response =
            document.getElementById(
                "contactResponse"
            );

        response.textContent =
            "Thank you " +
            name +
            "! Your message has been received.";

        response.style.color = "green";

        contactForm.reset();
    }
);
