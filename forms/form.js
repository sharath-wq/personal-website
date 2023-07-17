$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbySS12iM3Vmm-yRx3ueqI8X_fbHZXWszDUj-wo_XT1-1e5C5cXHi6SijTfjF7wUZSQ_/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});
