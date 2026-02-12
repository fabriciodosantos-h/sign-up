const vf = document.getElementById('env')

vf.addEventListener('click', clicar)

function clicar() {
    const nome = document.getElementById('Inome')
    const email = document.getElementById('Iemail')
    const senha = document.getElementById('Isenha')
    const data = document.getElementById('Iidade')
    const anoatual = new Date().getFullYear()
    const anodigitado = new Date(data.value).getFullYear()

    if (nome.value == '' || email.value == '' || senha.value == '' || data.value == '') {
        alert('[ERRO] Preencha os dados abaixo antes de prosseguir.')
    } else if (anodigitado > anoatual) {
        alert('[ERRO] Ano inválido.')
    } else {
        alert('Preenchido! Redirecionando...')
    }
}