// Add your code here
function submitData(name, email) {
    let nameAndEmail = {
        name: name,
        email: email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(nameAndEmail)
    })
    .then(response => response.json())
    .then(function (data) {
        let id = data.id
        let paragraph = document.body.appendChild(document.createElement('p'))
        paragraph.textContent = id
    })
    .catch(function (error) {
        let message = error.message
        let errorMessage = document.body.appendChild(document.createElement('h4'))
        errorMessage.textContent = message
    })
}