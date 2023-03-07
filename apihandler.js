const form = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const responseContainer = document.getElementById('response-container');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const message = messageInput.value;
  messageInput.value = '';

  if (!message) {
    return;
  }

  try {
    const response = await axios.post('/api/message', { message });
    const text = response.data.text;
    const div = document.createElement('div');
    div.innerText = text;
    responseContainer.appendChild(div);
  } catch (error) {
    console.error(error);
  }
});