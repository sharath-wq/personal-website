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
      return;
    }

    // Validate name length
    if (formData.name.length < 3) {
      alert("Name should be at least 3 characters long.");
      return;
    }

    // Validate name only contains alphabets and dots
    if (!/^[a-zA-Z.\s]+$/.test(formData.name)) {
      alert("Name must contain only Alphabets and dots.");
      return;
    }

    // Simple email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate subject
    if (formData.subject == "") {
      alert("Please enter a subject");
      return;
    }

    // Validate message
    if (formData.message == "") {
      alert("Please enter a message");
      return;
    }

    // Submit the form
    console.log(formData);
    submit(formData);
    $("#submit-form")[0].reset();
  });
});

function submit(data) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbySS12iM3Vmm-yRx3ueqI8X_fbHZXWszDUj-wo_XT1-1e5C5cXHi6SijTfjF7wUZSQ_/exec",
    data: data,
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

