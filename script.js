$(document).ready(function () {
    // When the form is submitted
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var address = $("#address").val();

        // Validate form data (optional)
        if (name === "" || email === "" || phone === "" || address === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Display the data after submission
        $("#resultName").text("Name: " + name);
        $("#resultEmail").text("Email: " + email);
        $("#resultPhone").text("Phone: " + phone);
        $("#resultAddress").text("Address: " + address);

        // Hide the form and show the result
        $("#registrationForm").hide();
        $("#result").show();
    });
});
