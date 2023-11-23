 // FormUpload
        var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get the current date and time
            var currentDateTime = new Date();
            var submissionDate = currentDateTime.toISOString().split('T')[0]; // Extract date part
            var submissionTime = currentDateTime.toTimeString().split(' ')[0]; // Extract time part

            // Set the values in the hidden fields
            document.getElementById('submission-date').value = submissionDate;
            document.getElementById('submission-time').value = submissionTime;

            // Build the data object with form fields and separated date/time
            var data = {
                'first-name': document.getElementById('first-name').value,
                'last-name': document.getElementById('last-name').value,
                'email': document.getElementById('email').value,
                'phone': document.getElementById('phone').value,
                'submission-date': submissionDate,  // Add the submission date
                'submission-time': submissionTime   // Add the submission time
            };

            // Check if the form is valid
            if (form.checkValidity()) {
                fetch(form.action, {
                    method: "POST",
                    body: JSON.stringify({ data: data }), // Convert the data object to JSON
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(
                    response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    }
                ).then(() => {
                    // Show success pop-up
                    alert('Success! Form submitted successfully.');

                    // Clear form fields
                    form.reset();

                }).catch(error => {
                    // Show error pop-up with specific error message
                    alert('Error: ' + error.message);
                });
            } else {
                // Show error pop-up for form validation failure
                alert('Error: Please fill in all the required fields.');
            }
        });

        // JavaScript to dynamically center the text1 div vertically
        window.addEventListener('resize', centerChildVertically);
        document.addEventListener('DOMContentLoaded', centerChildVertically);

        // Function to handle orientation change
        function handleOrientationChange() {
            // Perform any updates or adjustments needed when the orientation changes
            centerChildVertically();
            reorderDivs();
        }

        // Listen for orientation change
        window.addEventListener('orientationchange', handleOrientationChange);

        function centerChildVertically() {
            // ... (Your existing centerChildVertically code)
        }

        function reorderDivs() {
            // ... (Your existing reorderDivs code)
        }

        // Reorder Divs on page load
        window.addEventListener('load', reorderDivs);

        // Reorder Divs on resize
        window.addEventListener('resize', reorderDivs);
