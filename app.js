const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('assets/musica/ManuelMedrano.mp3');

let contador = 0;
let nuevoBtnSiCreado = false;

// Evento para el botón "Sí"
function handleBtnSi() {
    randomPic.src = 'assets/fotos/0.jpg';
    question.innerText = 'Ya lo sabía 😏❤️';
    question.classList.add('question-style');
    question.style.fontFamily = "'Sacramento', cursive";

    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    if (nuevoBtnSiCreado) {
        document.querySelector('.nuevo-btn-si').style.display = 'none';
    }

    musica.play();
}

btnSi.addEventListener('click', handleBtnSi);

btnNo.addEventListener('click', () => {
    if (contador === 0) {
        btnNo.innerText = '¿Segura? Ok, presiona otra vez';
        randomPic.src = 'assets/fotos/2.jpeg';
        btnSi.classList.add('estilo-1');
    } else if (contador === 1 && !nuevoBtnSiCreado) {
        // Crear el segundo botón "Sí"
        const nuevoBtnSi = document.createElement('button');
        nuevoBtnSi.classList.add('botones__btn-si', 'nuevo-btn-si');
        nuevoBtnSi.innerText = 'Sí';
        nuevoBtnSi.style.marginLeft = '10px';
        nuevoBtnSi.addEventListener('click', handleBtnSi);

        document.querySelector('.botones').appendChild(nuevoBtnSi);
        btnNo.style.display = 'none';
        nuevoBtnSiCreado = true;
    }

    contador++;
});
