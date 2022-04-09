fetch("./../json/preguntas.json")
.then(response => response.json())
.then(data => {

    const centerText = document.querySelectorAll(".center_text");

    centerText.forEach(center=> {
        center.addEventListener("click", event => {
            let indexPregunta = data[event.currentTarget.innerHTML - 1];

            let modal = document.querySelector("#myModal");

            modal.style.display = "block";

            let modalBodyP = document.querySelector(".modal-body p");

            modalBodyP.textContent = indexPregunta;


            let close = document.querySelector("#close");

            close.onclick = function() {
                modal.style.display = "none";
            }
        } )
    });
})



