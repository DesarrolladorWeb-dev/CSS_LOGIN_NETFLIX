// validar el formulario
const inputs = document.querySelectorAll("form .campo input");

// listener a los input 
inputs.forEach(input => {
    input.addEventListener('blur',validarInput);
});

inputs.forEach(input => {
    input.addEventListener('blur',validarInput);
});

function validarInput(e){
    // console.log(e.target.value) //los valores de lo que escribimos

    const estado = ['valido', 'no-valido'];
    let clase;
    if(e.target.value.length === 0){
        clase = estado[1];
    }else {
        clase = estado[0]
    }
    // no importa si es valido o no es valido eliminare los dos
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    // le agregara tambien al siguiente elemento en este caso al label
    e.target.nextElementSibling.classList.add(clase);


    // inyectar dimamicamente el div con el error
    if(clase === 'no-valido'){
        // detecta que hay una alerta y ya no ingresara otra vez
            if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
                // Construir un mensaje de error
                const errorDiv = document.createElement('div');
                errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
                errorDiv.classList.add('alerta');
                // insertar el error 
                e.target.parentElement.parentElement.insertBefore(errorDiv,
                    e.target.parentElement.nextElementSibling
                )
        }
    }else{
        // Limpiar el mensaje de error si existe
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }

}

// Mostrar y ocultar password
const mostrarPasswordBtn = document.querySelector('form .campo span');
mostrarPasswordBtn.addEventListener('click',e => {
    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')){
        // mostrar texto
        e.target.classList.remove('mostrar'); //para que sea else en la proxima  
         // cambiar el texto
        e.target.textContent = "Ocultar"; //aqui cambia el texto
        // cambiamos a Password
        passwordInput.type = 'text'; //aqui el tipo
    }else{
        // mostrar el password
        e.target.classList.add('mostrar');
        // cambiar el texto
        e.target.textContent = "Mostrar";
        // cambiamos a Password
        passwordInput.type = 'password';
    }
})