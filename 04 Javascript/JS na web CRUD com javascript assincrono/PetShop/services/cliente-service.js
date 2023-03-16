const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`, {
        headers: {
            'Content-Type' :'application/json',
        },
      })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}


const criaCliente = (nome, email) => {
    
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' :'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){

            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover um cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar os clientes')
    })
}
   
export default {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
    


    // callback dentro de callback = não se faz mais

    // const http2 = new XMLHttpRequest()
    // http2.open('GET', 'http://localhost:3000/profile/semanaPassada') //GET pega os dados

    // http2.onload = () => {
        

    //     const http3 = new XMLHttpRequest()
    //     http3.open('GET', 'http://localhost:3000/profile/semanaRetrasada')

    //     http3.onload =() => {
            
    //     }
    // }
    // http2.send()
