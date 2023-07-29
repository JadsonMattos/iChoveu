# Boas-vindas ao repositório do projeto iChoveu

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto, você desenvolverá um site de previsão do tempo!

  Para isso, vai consumir dados diretamente de uma API. 🤩
</details>

## 1. Implemente a função `searchCities`

<details><summary>Implemente a função <code>searchCities</code> que se encontra no arquivo <code>helpers/weatherAPI.js</code></summary><br />

A função `searchCities` já está criada e é utilizada ao clicar no botão de pesquisar. Porém, ela não está funcionando, pois ainda não foi implementada. Você deve implementar a função para que ela retorne uma lista de cidades que correspondam ao termo de busca.

A função recebe um parâmetro `term`, que será o termo de busca. Por exemplo, se o usuário digitar "São Paulo" no campo de busca, o parâmetro `term` será "São Paulo".

Você deverá utilizar o endpoint de pesquisa de cidades para obter os dados das cidades que correspondam ao termo de busca.
</details>
<details><summary><strong>O que será verificado</strong></summary><br />

- Será validado se a função `searchCities`:
  - Chama o endpoint de pesquisa de cidades com o termo de busca.
  - Exibe um alert com a mensagem "Nenhuma cidade encontrada" caso a lista esteja vazia.
</details>

---

## 2. Implemente a função `getWeatherByCity`

<details><summary>Implemente a função <code>getWeatherByCity</code> que se encontra no arquivo <code>helpers/weatherAPI.js</code></summary><br />

A função `getWeatherByCity` recebe um parâmetro `cityURL` que será o URL da cidade obtido na requisição de pesquisa de cidades. Por exemplo, se o usuário pesquisar por "São Paulo", o parâmetro `cityURL` será "sao-paulo-sao-paulo-brazil".
</details>

<details><summary>Complemente a função <code>handleSearch</code> que se encontra no arquivo <code>helpers/pageFunctions.js</code></summary><br />

Dentro da função `handleSearch` no arquivo `helpers/pageFunctions.js`, a função `searchCities` já é chamada, porém seu retorno não é utilizado. Você deve utilizar o retorno da função `searchCities` para requisitar o tempo atual.

Para cada cidade retornada pela `searchCities`, você deve chamar a função `getWeatherByCity` passando o URL da cidade como parâmetro.
</details>

<details><summary><strong>O que será verificado</strong></summary><br />

- Será validado se a função `getWeatherByCity`:
  - Chama o endpoint do tempo atual com o URL de todas cidades encontradas.
</details>

---

## 3. Liste as cidades retornadas pela API

<details>
<summary>Após a chamada da API, renderize o retorno utilizando a função <code>createCityElement</code></summary><br />

  Com o resultado do tempo atual de todas cidades, adquirido no requisito 2, utilize a função `createCityElement` para criar os elementos HTML que representam as cidades retornadas pela API.

  - Adicione cada elemento criado pela função `createCityElement` como filho do elemento `<ul id="cities">`.
</details>

<details>
<summary><strong>O que será verificado</strong></summary><br />

- Será validado se, ao pesquisar por uma cidade, o elemento `<ul id="cities">` será preenchido com os elementos HTML das cidades retornadas pela API com as informações do tempo atual.
</details>

---

## 4. Adicione um botão para ver a previsão de 7 dias de uma cidade

<details><summary>Crie um botão dentro do elemento de cada cidade</summary><br />

  Modifique a função `createCityElement`, de modo que ela crie um botão para cada cidade retornada pela API.

  Esse botão deve conter o texto "Ver previsão".

  Adicione ao botão o evento de click que, ao ser clicado, deve realizar a requisição da previsão de 7 dias da cidade.
</details>

<details>
<summary><strong>O que será verificado</strong></summary><br />

- Será validado se o botão tem o texto "Ver previsão".
- Será validado se todas as cidades retornadas pela API têm um botão "Ver previsão".
- Será validado se, ao clicar no botão "Ver previsão" de uma cidade, serão exibidas as informações da previsão do tempo da cidade.

</details>