<h1> 
  <img src='./src/assets/images/LogoSimples.png' atl='App-Logo' style='width: 40px;'> 
  BZ Investimentos
</h1>

<h2><a href="https://bzinvestimentos.vercel.app/" target="_blank">Link para o Deploy</a></h2>

<img scr='./src/assets/images/working-app.gif' atl='Gif-app-working'>

## 💬 Contexto

<p>Este projeto foi desenvolvido para o processo seletivo da empresa <a href="https://www.xpinc.com/" target="_blank">XP Inc</a> .</p>
<p>O objetivo foi desenvolver uma aplicação que se assemelha a um aplicativo de investimentos em ações e adicionar algumas funcionalidades de conta digital.</p>

## 👨🏼‍💻 Tecnologias e Desafios

### Tecnologias Utilizadas:

* **React:** Biblioteca escolhida para construir as telas
* **ContextAPI:** Para o gerenciamento de estados
* **JavaScript:** Linguagem escolhida para desenvolver as lógicas
* **RTL + Jest:** Para testar a aplicação
* **Styled-Components:** Para estilização

### Desafios e Tomadas de Decisão:

* O primeiro desafio foi escolher como buscar informações sobre as ações listadas na bolsa. Para não desviar o foco do Front-end, optei por criar um array de objetos com as informações de 60 empresas listadas na bolsa.
* O segundo desafio foi definir como seriam salvas as informações. Em virtude do tempo e do foco no Front-end, optei por salvar no localStorage as informações do usuário e suas ações em carteira.
* Durante o desenvolvimento do projeto, surgiram alguns desafios para implementação de funcionalidades. Quando ficava em uma implementação por muito tempo, decidia sair do computador e esfriar a cabeça. Durante os momentos de pausa para café, banho, almoço, a solução surgia. 
* O proximo desafio apareceu ao finalizar a estrutura e lógica do projeto. Me propus a aprender uma nova biblioteca de estilização, então optei por Styled-Components, muito elogiada em relação à sua praticidade em aplicar lógica nos estilos. Não tive muita dificuldade para entender o funcionamento da biblioteca e, durante a estilização das páginas, vi que realmente React e Styled-Components formam uma ótima dupla.

## 🛠 Como Executar o Projeto

### Clonando o Repositório

```
git clone git@github.com:BrunoZolini/investment-app-psel-xp-bruno-zolini.git
cd investment-app-psel-xp-bruno-zolini
``` 

### Instalando Dependências
```
npm install
``` 
### Executando aplicação

  ```
    npm start
  ```

  ### Executando Testes

* Para rodar todos os testes: 

  ```
    npm test
  ```
