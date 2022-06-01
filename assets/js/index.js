const totalTip = document.getElementById("total-tip");
const each = document.getElementById("each");
const tipsForm = document.getElementById("tips-form");
const tip = document.getElementById("tip");

totalTip.style.display = "none";
each.style.display = "none";

tipsForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Não deixa a pagina recarregar quando o submit for acionado.
    
    let bill = document.getElementById("bill").value;
    let serviceQual = document.getElementById("service-quali").value;
    let numPeople = document.getElementById("people").value;

    if (bill == "" || serviceQual == 0) {
        if (bill == "") {
            alert("Por favor, informe o valor da conta.");
            return;
        } else if (serviceQual == 0) {
            alert("Por favor, informe como foi o serviço.");
            return;
        }
    }

    if (numPeople == " " || numPeople <= 1) {
        numPeople = 1;
        each.style.display = "none";
    } else {
        each.style.display = "block";
        each.style.transition = "all 1s";
    }
    
    let total = (bill * serviceQual) / numPeople;
    total = total.toFixed(2);
    
    tip.innerHTML = total;
    totalTip.style.display = "block";
    // totalTip.classList.add("transition");
});