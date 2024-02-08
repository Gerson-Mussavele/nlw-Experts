const perguntas = [
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retornar o tipo de dado de uma variável",
        "Comparar dois valores",
        "Executar uma função específica",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variável myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada quando um evento ocorre",
        "Uma função que é passada como argumento para outra função",
        "Uma função que remove elementos de um array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
      respostas: [
        "Arredondar um número para um número específico de casas decimais",
        "Converter uma string em maiúsculas",
        "Adicionar um elemento ao final de um array",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável 'let' em JavaScript?",
      respostas: [
        "Uma variável que não pode ser alterada após a sua atribuição inicial",
        "Uma variável global",
        "Uma variável que pode ser alterada e reatribuída",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma diferença, ambos comparam igualdade",
        "O operador '===' compara valor e tipo de dados, enquanto '==' compara apenas o valor",
        "O operador '==' compara valor e tipo de dados, enquanto '===' compara apenas o valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'split()' em JavaScript?",
      respostas: [
        "Remover espaços em branco de uma string",
        "Dividir uma string em um array de substrings",
        "Converter uma string em um número inteiro",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Este é um comentário de várias linhas",
        "/* Este é um comentário de várias linhas */",
        "<!-- Este é um comentário de várias linhas -->",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'escopo' em JavaScript?",
      respostas: [
        "A largura de uma variável",
        "O contexto no qual uma variável é acessível",
        "A profundidade de uma função",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'charAt()' em JavaScript?",
      respostas: [
        "Remover o último caractere de uma string",
        "Obter o caractere em uma posição específica de uma string",
        "Verificar se uma string contém determinados caracteres",
      ],
      correta: 1
    }
  ];
  
  //para bucar um elemento html
  const quiz = document.querySelector('#quiz')
  //ele seleciona apenas o 'template' que e a estrutura de como estao os textos
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDeperguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDeperguntas
  
    for (const item of perguntas){
      //E PARA clonar cada item que esta no 
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta){
          corretas.add(item)
  
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDeperguntas
        
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  
    quizItem.querySelector('dl dt').remove()
    
    //coloca as perguntas na tela
    quiz.appendChild(quizItem)
    }
  