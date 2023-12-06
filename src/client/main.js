const mainBtn = document.getElementById('idBtn');
mainBtn.addEventListener('click', login)

const user = document.getElementById('idUser');
const password = document.getElementById('idPassword');

async function login() {
    const userData = {
        method: 'POST',
        body: JSON.stringify({
            user: user.value,
            password: password.value
        }), headers: { 'Content-Type': 'application/json' }
    };

    const response = await fetch ('http://localhost:3001/login', userData);
    const message = await response.json();

    console.log (message);
}