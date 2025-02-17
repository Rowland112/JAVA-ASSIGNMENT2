// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
    const imageSelect = document.getElementById('imageSelect');
    const displayImage = document.getElementById('images');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const randomColorBtn = document.getElementById('randomColorBtn');
    const studentID = document.getElementById('myStudentId');
    const customNumberInput = document.getElementById('customNumber');

    // Array to store the image file paths (assumes images are in the 'img' folder)
    const images = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg'
    ];

    // Populate the image select dropdown dynamically
    images.forEach((image, index) => {
        const option = document.createElement('option');
        option.value = image;
        option.textContent = `Image ${index + 1}`;  // Option text will be Image 1, Image 2, etc.
        imageSelect.appendChild(option);
    });

    // Display the selected image when the select list is changed
    imageSelect.addEventListener('change', function () {
        if (imageSelect.value) {
            displayImage.src = imageSelect.value; // Set the img src to the selected option
        } else {
            displayImage.src = ''; // Clear the image if no selection is made
        }
    });

    // Handle the Change Custom Color button
    changeColorBtn.addEventListener('click', function () {
        let input = customNumberInput.value;
        input = parseInt(input);

        // Display student ID
        studentID.textContent = "Student ID: 200548693"; // Replace with your actual student ID

        // Change background color based on the input value
        if (input < 0 || input > 100) {
            document.body.style.backgroundColor = 'red';
        } else if (input >= 0 && input < 20) {
            document.body.style.backgroundColor = 'green';
        } else if (input >= 20 && input < 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (input >= 40 && input < 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (input >= 60 && input < 80) {
            document.body.style.backgroundColor = 'purple';
        } else if (input >= 80 && input <= 100) {
            document.body.style.backgroundColor = 'yellow';
        }
    });

    // Handle the Change Random Color button
    randomColorBtn.addEventListener('click', function () {
        const randomNum = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100

        // Change background color based on the random number
        if (randomNum < 0 || randomNum > 100) {
            document.body.style.backgroundColor = 'red';
        } else if (randomNum >= 0 && randomNum < 20) {
            document.body.style.backgroundColor = 'green';
        } else if (randomNum >= 20 && randomNum < 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (randomNum >= 40 && randomNum < 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (randomNum >= 60 && randomNum < 80) {
            document.body.style.backgroundColor = 'purple';
        } else if (randomNum >= 80 && randomNum <= 100) {
            document.body.style.backgroundColor = 'yellow';
        }
    });
});
