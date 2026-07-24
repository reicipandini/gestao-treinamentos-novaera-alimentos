function voltarDashboard(){

    window.location.href="index.html";

}





function pesquisarCurso(){


    let pesquisa = document
    .getElementById("pesquisa")
    .value
    .toLowerCase();



    let cards = document
    .querySelectorAll(".card-curso");



    cards.forEach(card=>{


        let texto = card.innerText.toLowerCase();



        if(texto.includes(pesquisa)){


            card.style.display="block";


        }else{


            card.style.display="none";


        }


    });



}