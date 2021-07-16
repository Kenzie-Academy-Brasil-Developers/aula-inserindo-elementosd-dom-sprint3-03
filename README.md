# Inserindo elementos em sua pagina

Até agora aprendemos apenas a selecionar os elementos já existentes em nossa pagina html, porém é muito comum que queiramos inserir os elementos de forma dinâmica. Para podermos fazer isso utilizamos das ferramentas que o DOM nos fornece. Para os exemplos a seguir vamos partir do código finalizado na aula anterior, pode acessar ele através deste [link](https://gitlab.com/lucianof/select-dom-elements). A página no momento encontra-se da seguinte forma:

![exemplo](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/aula-inserindo-elementos-na-pagina/img1.png)
```HTML
    ...
    <div class="box" id="box_1">
        <div class="subbox" id="subbox_1"></div>
        <div class="subbox" id="subbox_2"></div>
    </div>
    <div class="box"></div>
    <div class="box" id="box_3">
        <div class="subbox" id=1></div>
    </div>
    <div class="box" id="box_4">
        <input type="text" value="Email" name="email">
        <input type="text" value="Senha" name="password">
    </div>
    ...
```

Para inserimos novos elementos em nossas paginas utitlizamos principalmente de dois comandos combinados([`document.createElement('tagHTML')`](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement) e [`element.appendChild(elementoASerInserido)`](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)). De forma geral acabamos seguindo sempre um passo a passo quando inserimos novos elementos:
1. Selecionamos o elemento no HTML no qual queremos colocar o novo elemento
2. Criamos um novo elemento no JavaScript
3. Adicionamos as classes e atributos variáveis em nosso elemento
4. Linkamos o elemento criado com o selecionado no passo 1.

Vamos mostrar em código como funciona:

```Javascript
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
```
![exemplo](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/aula-inserindo-elementos-na-pagina/img2.png)

Agora vamos inserir mais uma div com a classe 'box' ao final da nossa pagina e tambem inserir um botão nela.

```Javascript
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
```
![exemplo](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/aula-inserindo-elementos-na-pagina/img3.png)
***
### Leia tambem:
* [w3Schools inserting elements](https://www.w3schools.com/js/js_htmldom_nodes.asp)
* [createTextNode MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

