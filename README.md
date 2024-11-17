

# SpaceX Explorer

**SpaceX Explorer** é uma aplicação web que permite explorar os lançamentos espaciais da **SpaceX**. Através dessa aplicação, é possível pesquisar e visualizar detalhes sobre os lançamentos mais recentes, com um layout simples e responsivo.

## Tecnologias Utilizadas

- **React** (Biblioteca para a construção da interface)
- **TypeScript** (Para tipagem estática)
- **React Router** (Para navegação entre páginas)
- **CSS/SCSS** (Para estilização)
- **SpaceX API** (Fonte de dados para lançamentos espaciais)

---

## Funcionalidades

- **Página de pesquisa**: Permite que o usuário busque lançamentos por nome e data.
- **Detalhes do lançamento**: Ao clicar em um lançamento, o usuário será redirecionado para uma página com informações detalhadas sobre o lançamento selecionado.
- **Layout responsivo**: A aplicação é responsiva, funcionando bem em dispositivos de diferentes tamanhos de tela.

---

## Instalação

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/DevBrunoPi/SpaceX-Explorer.git
```

### 2. Navegue para o diretório do projeto

```bash
cd SpaceX-Explorer
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```

O projeto estará disponível em `http://localhost:3000` (ou outra porta, se configurado no arquivo `.env`).

---

## Uso

- **Página de pesquisa**: Pesquise lançamentos espaciais usando o nome ou a data do lançamento.
- **Página de detalhes**: Clique em um lançamento da pesquisa para ver mais detalhes sobre ele.

---

## Configuração de Ambiente

Caso queira mudar a porta em que o aplicativo está rodando, siga os passos abaixo:

1. **Crie ou edite o arquivo `.env`** na raiz do projeto.
2. Adicione a variável `PORT` com o valor da porta desejada:
   ```plaintext
   PORT=3001
   ```

3. Reinicie o servidor de desenvolvimento com o comando `npm start`.

---

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE] para mais detalhes.

---

## Créditos

A API utilizada neste projeto é a **SpaceX API**, que fornece dados sobre lançamentos, cápsulas, foguetes, e outras informações relacionadas à SpaceX.

- **SpaceX API**: [https://api.spacexdata.com](https://api.spacexdata.com)

Agradecemos à equipe da SpaceX por disponibilizar essa API pública, que foi fundamental para o desenvolvimento deste projeto.
