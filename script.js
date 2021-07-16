// Linkamos o elemento do HTML em nosso box1
const box1 = document.getElementById('box_1')

// Agora toda alteracao que fizermos nele vai ser aplicada no nosso DOM
// Vamos mudar sua cor de fundo
box1.style.backgroundColor = '#d33'


const inputs = document.getElementsByTagName('input')

// Lembrado ja que o comando esta no plural 'Elements'
// Logo temos um array e precimos indicar
// a posicao do elemento que queremos alterar
inputs[0].style.height = '2rem'
// Assim alteramos a altura do primeiro input


const subboxes = document.getElementsByClassName('subbox')

// Vamos alterar a ultima subboxes
// Por ser um array podemos acessar o seu length
// Vamos pegar a posicao do ultimo valor

const last = subboxes.length - 1 // Length = 3 portanto subtraimos 1 para a ult pos

subboxes[last].style.border = '3px solid green'


// Perceba que podemos encadear a posicao ja na hora de selecionar o elemento
const inputPassword = document.getElementsByName('password')[0]

// Nosso input estava como type='text' vamos corrigir para password
inputPassword.type = 'password'

// Vamos mudar a borda a tambem
inputPassword.style.border = '1px solid black'
inputPassword.style.borderRadius = '10px'


// Selecionaremos o segundo filho direto do Body
// Perceba que voce pode usar todas as mesmas propriedades la do CSS
const div2 = document.querySelector('body > div:nth-child(2)')
div2.classList.add('hidden')


// Note a utilizacao do ponto para classes assim como no CSS
// para os IDs tambem devera ser utilizado o #
const subboxes2 = document.querySelectorAll('body .box .subbox')

// Vamos aplicar a nossa classe teste em todas as subboxes
// Por ser um array podemos percorrer ele e ir aplicando 1 a 1
// Para isso vamos usar nossa estrutura de repeticao For
for (let i = 0; i < subboxes2.length; i++) {
    subboxes2[i].classList.add('teste')
}
// Note que o ultimo elemento nao teve a cor da borda aplicada
// Tente entender o Porque isso acontece inspecionando a pagina.


// 1 - Selecionamos um elemento no qual queremos adcionar algo
const divToAppend = document.getElementById('box_3')

// 2 - Criamos o elemento no caso um <p></p>
const paragraph = document.createElement('p')
// 3 - Inserimos as alteracoes que queremos nele
// no exemplo estamos colocando apenas um texto
paragraph.innerText = 'Eu fui criado dinamicamente'

// 4 - Colocamos ele na tela linkando com o passo 1.
// Obs. O passo 1 pode vir depois do 2 e 3.
divToAppend.appendChild(paragraph)


// 1 - Selecionamos o body d HTML
const body = document.getElementsByTagName('body')[0]

// 2 - Criamos um novo elemento
const newBox = document.createElement('div')
// 3 - Inserimos as informacoes nele
newBox.classList.add('box')

// -- Queremos criar mais um novo elemento logo vamos voltar ao passo 2

// 2 - Outro novo elemento
const button = document.createElement('button')
// 3 - Suas alteracoes
button.innerText = 'Click'


// 4 - Agora vamos linkar eles entre si
// Colocamos o botao dentro da nossa div (newBox)
newBox.appendChild(button)
// E aqui linkamos a newBox com nosso body do HTML
body.appendChild(newBox)