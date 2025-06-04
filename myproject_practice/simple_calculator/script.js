document.getElementById("calculate").addEventListener("click", function () {
    // Step 1: Get input values
    const val1 = document.getElementById("value1").value;
    const val2 = document.getElementById("value2").value;
    const operator = document.getElementById("operator").value;

    // Step 2: Convert to numbers
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    // Step 3: Input validation
    if (isNaN(num1) || isNaN(num2)) {
        alert("⚠ Please enter valid numbers!");
        return;
    }

    // Step 4: Perform calculation
    let result;

    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                alert("🚫 Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("❌ Unknown operator!");
            return;
    }

    // Step 5: Display result
    document.getElementById("result").value = result;
});

