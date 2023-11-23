
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

            function centerChildVertically() {
                var screenIsWide = window.innerWidth > 600;

                var parentContainer1 = document.getElementById('box1');
                var childContainer1 = document.getElementById('text1');
                var childContainer2 = document.getElementById('text2');
                var childContainer3 = document.getElementById('text3');
                var childContainer4 = document.getElementById('image1');
                var childContainer5 = document.getElementById('image2');
                var childContainer6 = document.getElementById('image3');
                var childContainer7 = document.getElementById('image4');

                if (screenIsWide) {
                    // Calculate the top margin to center the child vertically
                    var marginTop = (parentContainer1.clientHeight - childContainer1.clientHeight) / 2;
                    var marginTop2 = (parentContainer1.clientHeight - childContainer5.clientHeight) / 2;
                    var marginTop3 = (parentContainer1.clientHeight - childContainer2.clientHeight) / 2;
                    var marginTop4 = (parentContainer1.clientHeight - childContainer3.clientHeight) / 2;
                    var marginTop5 = (parentContainer1.clientHeight - childContainer7.clientHeight) / 2;

                    // Apply the margin to the child container
                    childContainer1.style.marginTop = marginTop + 'px';
                    childContainer2.style.marginTop = marginTop3 + 'px';
                    childContainer3.style.marginTop = marginTop4 + 'px';
                    childContainer5.style.marginTop = marginTop2 + 'px';
                    childContainer6.style.marginTop = marginTop2 + 'px';
                    childContainer7.style.marginTop = marginTop5 + 'px';

                    // Reset styles for small screens (width <= 600px)
                    var childContainers = [childContainer2, childContainer3, childContainer4, childContainer5, childContainer6, childContainer7];

                    childContainers.forEach(function (childContainer) {
                        childContainer.style.marginBottom = '0';
                    });
                } else {
                    // Adjust the top and bottom margins for small screens (width <= 600px)
                    var margin2 = (parentContainer1.clientHeight - childContainer2.clientHeight) / 2;
                    var margin3 = (parentContainer1.clientHeight - childContainer3.clientHeight) / 2;
                    var margin4 = (parentContainer1.clientHeight - childContainer4.clientHeight) / 2;
                    var margin5 = (parentContainer1.clientHeight - childContainer5.clientHeight) / 2;
                    var margin6 = (parentContainer1.clientHeight - childContainer6.clientHeight) / 2;
                    var margin7 = (parentContainer1.clientHeight - childContainer7.clientHeight) / 2;

                    childContainer2.style.marginTop = margin2 + 'px';
                    childContainer3.style.marginTop = margin3 + 'px';
                    childContainer4.style.marginTop = margin4 + 'px';
                    childContainer5.style.marginTop = margin5 + 'px';
                    childContainer6.style.marginTop = margin6 + 'px';
                    childContainer7.style.marginTop = margin7 + 'px';

                    childContainer2.style.marginBottom = margin2 + 'px';
                    childContainer3.style.marginBottom = margin3 + 'px';
                    childContainer4.style.marginBottom = margin4 + 'px';
                    childContainer5.style.marginBottom = margin5 + 'px';
                    childContainer6.style.marginBottom = margin6 + 'px';
                    childContainer7.style.marginBottom = margin7 + 'px';

                    // Reset top margins for boxes 2-7
                    childContainer2.style.marginTop = '0';
                    childContainer3.style.marginTop = '0';
                    childContainer4.style.marginTop = '0';
                    childContainer5.style.marginTop = '0';
                    childContainer6.style.marginTop = '0';
                    childContainer7.style.marginTop = '0';
                }
            }
            // JavaScript to reorder divs in mobile view and unmerged boxes in desktop view
            function reorderDivs() {
                const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                const container = document.querySelector('.container');

                // Order of divs for mobile view
                const mobileOrder = [
                    'box1', 'box2', 'box4', 'box3', 'box5', 'box6', 'box8', 'box7', 'box9', 'box10', 'box11'
                ];

                // Order of unmerged boxes for desktop view
                const desktopOrder = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10', 'box11'];

                // Reorder divs based on screen width
                if (screenWidth <= 600) {
                    mobileOrder.forEach(id => {
                        const box = document.getElementById(id);
                        container.appendChild(box);

                    });

                    // Make the body scrollable for width below 600px
                    document.body.style.overflow = 'auto';
                } else {
                    desktopOrder.forEach(id => {
                        const box = document.getElementById(id);
                        container.appendChild(box);
                    });

                    // Reset overflow for width above 600px
                    document.body.style.overflow = 'auto';

                    // Set the height of specified boxes to be the same as box 2
                    const specifiedBoxes = document.querySelectorAll('#box2, #box3, #box4, #box5, #box6, #box7, #box8');
                    let box2Height = document.getElementById('box1').offsetHeight;

                    specifiedBoxes.forEach(box => {
                        box.style.height = `${box2Height}px`;
                    });

                    // Set the width of row 8 to auto
                    const row6 = document.getElementById('box9');
                    const row7 = document.getElementById('box10');
                    const row8 = document.getElementById('box11');
                    row6.style.width = '100%';
                    row7.style.width = '100%';
                    row8.style.width = '100%';
                }
            }

            // Reorder Divs on page load
            window.addEventListener('load', reorderDivs);
            // Reorder Divs on resize
            window.addEventListener('resize', reorderDivs);
