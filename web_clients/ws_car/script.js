const esp32_ip_address = '172.22.204.227';
const port = 80;


const socket_address = 'ws://'+ esp32_ip_address +':' + port+ '/ws'; 
const socket = new WebSocket(socket_address);
let isConnected = false;

// Connection Button
const connectionButton = document.getElementById('connection-button');
connectionButton.addEventListener('click', function () {
    if (isConnected) {
        // Show confirmation dialog before disconnecting
        const confirmed = confirm('Are you sure you want to disconnect?');
        if (confirmed) {
            socket.close();
        }
    } else {
        socket = new WebSocket(socket_address);
    }
});

socket.addEventListener('open', function (event) {
    isConnected = true;
    connectionButton.textContent = 'Click to Disconnect';
    connectionButton.classList.remove('disconnected');
    connectionButton.classList.add('connected');
});

socket.addEventListener('close', function (event) {
    isConnected = false;
    connectionButton.textContent = 'Click to Connect';
    connectionButton.classList.remove('connected');
    connectionButton.classList.add('disconnected');
});

  // Speed Slider
  const speedSlider = document.getElementById('speed-slider');
speedSlider.addEventListener('input', function () {
    const speed = speedSlider.value;
    socket.send(`SET_SPEED:${speed}`);
});

// Controller Buttons
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

const resetButton = document.getElementById('reset-button');
const ledButton = document.getElementById('led-button');

function sendCommand(command) {
    socket.send(command);
}

upButton.addEventListener('mousedown', function () {
    upButton.classList.add('active');
    sendCommand('goStraight');
});
upButton.addEventListener('mouseup', function () {
    upButton.classList.remove('active');
    sendCommand('stop');
});
upButton.addEventListener('mouseleave', function () {
    upButton.classList.remove('active');
    sendCommand('stop');
});

downButton.addEventListener('mousedown', function () {
    downButton.classList.add('active');
    sendCommand('goBack');
});
downButton.addEventListener('mouseup', function () {
    downButton.classList.remove('active');
    sendCommand('stop');
});
downButton.addEventListener('mouseleave', function () {
    downButton.classList.remove('active');
    sendCommand('stop');
});

leftButton.addEventListener('mousedown', function () {
    leftButton.classList.add('active');
    sendCommand('turnLeft');
});
leftButton.addEventListener('mouseup', function () {
    leftButton.classList.remove('active');
    sendCommand('stop');
});
leftButton.addEventListener('mouseleave', function () {
    leftButton.classList.remove('active');
    sendCommand('stop');
});

rightButton.addEventListener('mousedown', function () {
    rightButton.classList.add('active');
    sendCommand('turnRight');
});
rightButton.addEventListener('mouseup', function () {
    rightButton.classList.remove('active');
    sendCommand('stop');
});
rightButton.addEventListener('mouseleave', function () {
    rightButton.classList.remove('active');
    sendCommand('stop');
});

// Reset Button
resetButton.addEventListener('click', function () {
    sendCommand('RESET');
});



// WebSocket Events
socket.onopen = function(event) {
    console.log('Connected to the WebSocket server');
};

socket.onmessage = function(event) {
    const message = event.data;
    console.log('Received message:', message);
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

socket.onclose = function(event) {
    console.log('Connection closed');
};