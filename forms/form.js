$(document).ready(function () {
  $("#submit-form").submit(function (e) {
    e.preventDefault();

    // Get the form data
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#message").val(),
    };

    // Validate name
    if (formData.name == "") {
      alert("Please enter a name");
    }

    // Validate name length
    if (formData.name.length < 3) {
      alert("Name should be at least 3 characters long.");
      return;
    }

    // Validate name only contain alphabest 
    if (!/^[a-zA-Z.\s]+$/.test(formData.name)) {
      alert("Name must contain only Alphabets and dot.");
      return;
    }

      // Simple email format validation
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // validate subject
    if (formData.subject == "") {
      alert("Please enter a subject");
      return;
    }

    // validate message
    if (formData.message == "") {
      alert("Please enter a message");
    }



    // Submit the form (you can replace this with your own code to send the form data to the server)
    console.log(formData);
    alert("Form submitted successfully!");
    // You can also use Ajax to send the form data to the server asynchronously

    // Reset the form after successful submission
    submit(formData);
    $("#submit-form")[0].reset();
  });
});

function submit(data) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbySS12iM3Vmm-yRx3ueqI8X_fbHZXWszDUj-wo_XT1-1e5C5cXHi6SijTfjF7wUZSQ_/exec",
    data: data.serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
}

