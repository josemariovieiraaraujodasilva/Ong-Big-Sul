document.addEventListener("DOMContentLoaded", () => {

    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");

    if (cpfInput) {
        cpfInput.addEventListener("input", formatarCPF_CNPJ);
    }

    if (telefoneInput) {
        telefoneInput.addEventListener("input", formatarTelefone);
    }

    if (cepInput) {
        cepInput.addEventListener("input", formatarCEP);
    }

});


function formatarCPF_CNPJ(event) {
    let valor = event.target.value.replace(/\D/g, "");

    if (valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        valor = valor.slice(0, 14);
        valor = valor.replace(/(\d{2})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1/$2");
        valor = valor.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }
    event.target.value = valor;
}

function formatarTelefone(event) {
    let valor = event.target.value.replace(/\D/g, "");
    valor = valor.slice(0, 11);

    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else {
        valor = valor.replace(/^(\d*)$/, "($1");
    }
    event.target.value = valor;
}

function formatarCEP(event) {
    let valor = event.target.value.replace(/\D/g, "");
    valor = valor.slice(0, 8);

    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
    }
   
    event.target.value = valor;
}