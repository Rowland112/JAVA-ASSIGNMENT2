// Define student details
const studentId = "200548693";
const studentName = "Rowland Osei Frimpong";

// Display student details dynamically
document.getElementById("student-details").textContent = `Student ID: ${studentId}, Name: ${studentName}`;

// Pizza Class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    getDescription() {
        return `You have ordered a ${this.size} pizza with ${this.crust} crust and toppings of ${this.toppings.join(", ")}.`;
    }
}

// Form Validation
function validateForm() {
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const toppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);

    if (toppings.length === 0) {
        alert("Please select at least one topping.");
        return null;
    }

    return new Pizza(size, crust, toppings);
}

// Event listener for the order button
document.getElementById("order-button").addEventListener("click", () => {
    const pizza = validateForm();

    if (pizza) {
        // Display pizza description to the user
        document.getElementById("pizza-description").textContent = pizza.getDescription();
    }
});
