(function() {

  // HTML elements
  const form = document.querySelector('form');
  const nameField = document.querySelector('input#name');
  const messageField = document.querySelector('input#message');
  const messageList = document.querySelector('ul');

  // Create a dynamic host variable for deployment to Heroku
  const HOST = location.origin.replace(/^http/, 'ws')

  // Construct a WebSocket object that will create and
  // manage the connection to the WebSocket server
  const websocket = new WebSocket(HOST);

  // HTML events
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const author = nameField.value;
    const content = messageField.value;
    const message = {
      author,
      content
    };
    const messageString = JSON.stringify(message);
    websocket.send(messageString);
    console.log('Message sent: ', message);
    messageField.value = '';
    return false;
  });

  // WebSocket events
  websocket.addEventListener('open', function(event) {
    console.log('Connected to the WebSocket server');
  });

  websocket.addEventListener('message', function(event) {
    const message = JSON.parse(event.data);
    console.log('Message received: ', message);
    const newListItem = document.createElement('li');
    messageList.insertBefore(newListItem, messageList.childNodes[0]);
    newListItem.innerHTML = `<span>${message.author}:</span> ${message.content}`;
  });

}());