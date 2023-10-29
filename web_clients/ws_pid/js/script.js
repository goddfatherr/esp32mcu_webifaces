var ws = new WebSocket("ws://172.22.197.107:3333");

ws.onopen = function() {
    console.log("WebSocket connection established.");
};

ws.onmessage = function(event) {
    console.log("Received message from server:", event.data);
    // Process the received message from the server
};

ws.onclose = function() {
    console.log("WebSocket connection closed.");
};

function sendPIDValue(pidType) {
    var pidValue = document.getElementById(pidType).value;

    // Validate that the entered value is numeric
    if (isNaN(pidValue) || pidValue.trim() === "") {
        alert("Invalid PID value. Please enter a numeric value.");
        return;
    }

    // Send the PID value to the server via WebSocket
    var message = JSON.stringify({ [pidType]: pidValue });
    ws.send(message);

    // Update recent values display
    var recentValues = document.getElementById('recentValues');
    var currentRecentValues = recentValues.innerHTML;
    var updatedRecentValues = pidType.toUpperCase() + ": " + pidValue + "<br>" + currentRecentValues;
    if (updatedRecentValues.split('<br>').length > 6) {
        updatedRecentValues = updatedRecentValues.substring(0, updatedRecentValues.lastIndexOf('<br>'));
    }
    recentValues.innerHTML = updatedRecentValues;
}

function sendResetCommand() {
    // Clear PID values and recent values display
    document.getElementById('kp').value = "";
    document.getElementById('ki').value = "";
    document.getElementById('kd').value = "";
    document.getElementById('recentValues').textContent = "";

    // Prompt user for confirmation
    var confirmReset = confirm("Do you also want to reset PID on server?");

    if (confirmReset) {
        // Send reset command to the server via WebSocket
        ws.send("reset");
    }
}