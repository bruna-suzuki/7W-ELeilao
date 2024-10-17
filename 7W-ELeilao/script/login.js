const url = 'https://go-wash-api.onrender.com/api/login';

async function login() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    
    let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password,
            "user_type_id": 1
        }),
        headers: {
            'Content-Type': 'application/json',
        }
       
    });

    let resposta = await api.json();
    if (api.ok) {
        localStorage.setItem("user", JSON.stringify(resposta))
        alert("Login sucesso")
        return
    } else {
        alert(resposta.data.errors)
    }


    // let respostaErro = await response.json();
    // console.log(respostaErro)
    
}