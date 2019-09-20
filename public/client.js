(function() {

  // HTML elements
  const form = document.querySelector('form');
  const nameField = document.querySelector('input#name');
  const messageField = document.querySelector('input#message');
  const messageList = document.querySelector('ul');

  // Construct a WebSocket object that will create and
  // manage the connection to the WebSocket server
  const websocket = new WebSocket('ws://localhost:3000');

  // HTML events
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const author = nameField.value;
    const content = messageField.value;
    const message = {
      author,
      content
    };
    console.log('Message', message);
    messageField.value = '';
    return false;
  });

  // WebSocket events
  websocket.addEventListener('open', (event) => {
    console.log('Connected to the WebSocket server');
  });

  websocket.addEventListener('close', (event) => {
    console.log('Disconnected from the WebSocket server');
  });

}());