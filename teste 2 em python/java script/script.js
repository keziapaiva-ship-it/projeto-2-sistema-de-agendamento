let agendamentos =
JSON.parse(
localStorage.getItem("agendamentos")
) || [];

mostrarAgendamentos();

const formulario =
document.getElementById("formulario");

const lista =
document.getElementById("agendamentos");

let agendamentos = [];

formulario.addEventListener("submit", function(e){

e.preventDefault();

const nome =
document.getElementById("nome").value;

const telefone =
document.getElementById("telefone").value;

const servico =
document.getElementById("servico").value;

const data =
document.getElementById("data").value;

const hora =
document.getElementById("hora").value;

agendamentos.push({
nome,
telefone,
servico,
data,
hora
});

localStorage.setItem(
"agendamentos",
JSON.stringify(agendamentos)
);

mostrarAgendamentos();

formulario.reset();

});

function mostrarAgendamentos(){

lista.innerHTML = "";

agendamentos.forEach((agendamento,index)=>{

lista.innerHTML += `
<div class="card">

<h3>${agendamento.nome}</h3>

<p>📞 ${agendamento.telefone}</p>

<p>💼 ${agendamento.servico}</p>

<p>📅 ${agendamento.data}</p>

<p>⏰ ${agendamento.hora}</p>

<button onclick="excluir(${index})">
Excluir
</button>

</div>
`;

});

}


function excluir(index){

agendamentos.splice(index,1);

mostrarAgendamentos();

}

