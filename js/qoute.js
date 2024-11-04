document.addEventListener('DOMContentLoaded', function() {
    // Get selected courses from localStorage
    const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
    
    // Get the quote list element
    const quoteList = document.getElementById('quoteList');
    
    // Calculate total price
    let totalPrice = 0;
    
    // Display each course
    if (selectedCourses.length > 0) {
        selectedCourses.forEach((course, index) => {
            // Create list item for course
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="quote-item">
                    <span>Course: ${course.title}</span>
                    <span>Price: ${course.price}</span>
                    <span>Duration: ${course.duration}</span>
                    <button onclick="removeCourse(${index})" class="remove-btn">Remove</button>
                </div>
            `;
            quoteList.appendChild(li);
            
            // Add to total price (convert price string to number)
            const priceNum = parseFloat(course.price.replace('R', ''));
            if (!isNaN(priceNum)) {
                totalPrice += priceNum;
            }
        });

        // Apply discount based on number of courses
        let discountedPrice = totalPrice;
        let discountPercentage = 0;

        // Determine discount percentage based on number of courses
        if (selectedCourses.length === 2) {
            discountPercentage = 0.05; // 5% discount
        } else if (selectedCourses.length === 3) {
            discountPercentage = 0.10; // 10% discount
        } else if (selectedCourses.length > 3) {
            discountPercentage = 0.15; // 15% discount
        }

        // Apply discount if applicable
        if (discountPercentage > 0) {
            const discount = totalPrice * discountPercentage;
            discountedPrice = totalPrice - discount;

            // Add discount information
            const discountElement = document.createElement('li');
            discountElement.innerHTML = `
                <div class="discount">
                    <span>Discount (${discountPercentage * 100}%): R${discount.toFixed(2)}</span>
                </div>
            `;
            quoteList.appendChild(discountElement);
        }

        // Add total price to quote
        if (selectedCourses.length > 1) {
            const totalElement = document.createElement('li');
            totalElement.innerHTML = `
                <div class="total">
                    <span>Original Total: R${totalPrice.toFixed(2)}</span>
                    <br>
                    <span>Final Total: R${discountedPrice.toFixed(2)}</span>
                </div>
            `;
            quoteList.appendChild(totalElement);
        } else {
            const totalElement = document.createElement('li');
            totalElement.innerHTML = `
                <div class="total">
                    <span>Total: R${discountedPrice.toFixed(2)}</span>
                </div>
            `;
            quoteList.appendChild(totalElement);
        }
    } else {
        quoteList.innerHTML = '<li>No courses selected</li>';
    }
});

// Function to remove a course from the quote
function removeCourse(index) {
    let selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
    selectedCourses.splice(index, 1);
    localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
    location.reload(); // Refresh the page to update the display
}

// Add a function to clear all courses
function clearQuote() {
    localStorage.removeItem('selectedCourses');
    location.reload();
}