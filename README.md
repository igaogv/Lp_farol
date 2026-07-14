# Farol — Landing Page Institucional

Landing page responsiva desenvolvida para apresentar os serviços da Farol, destacar seus diferenciais e facilitar o contato com potenciais clientes.

## Projeto online

Acesse a aplicação:

https://lp-farol-tivw.vercel.app

## Sobre o projeto

O projeto foi desenvolvido com foco em:

* Design moderno e responsivo;
* Apresentação clara dos serviços;
* Navegação simples;
* Boa experiência em celulares e computadores;
* Organização dos componentes;
* Integração entre frontend e backend.

## Tecnologias utilizadas

### Frontend

* React
* JavaScript
* Tailwind CSS
* React Router
* Axios

### Backend

* Python
* FastAPI
* MongoDB
* PyMongo
* Pydantic

### Ferramentas

* Git
* GitHub
* Vercel
* Pytest

## Estrutura do projeto

```text
Lp_farol/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── pages/
│
├── backend/
├── tests/
└── README.md
```

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/igaogv/Lp_farol.git
```

Entre na pasta:

```bash
cd Lp_farol
```

## Executar o frontend

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

O frontend será aberto em:

```text
http://localhost:3000
```

## Executar o backend

Abra outro terminal e entre na pasta do backend:

```bash
cd backend
```

Crie um ambiente virtual:

```bash
python -m venv .venv
```

Ative o ambiente virtual no Windows:

```bash
.venv\Scripts\activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie a API:

```bash
uvicorn server:app --reload
```

A API será executada em:

```text
http://localhost:8000
```

A documentação automática da API estará disponível em:

```text
http://localhost:8000/docs
```

## Variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend`.

Exemplo:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=farol_database
CORS_ORIGINS=http://localhost:3000
```

Não envie o arquivo `.env` para o GitHub.

Use um arquivo chamado `.env.example` para mostrar quais variáveis são necessárias.

## Testes

Para executar os testes do backend:

```bash
pytest
```

## Minha participação

Fui responsável pela personalização da interface, organização dos componentes, responsividade, integração entre frontend e backend, correções e publicação do projeto.

A estrutura inicial foi desenvolvida com apoio de ferramentas de inteligência artificial, utilizadas como suporte durante o desenvolvimento.

## Melhorias futuras

* Melhorar a validação do formulário;
* Adicionar envio de mensagens por e-mail;
* Criar mais testes automatizados;
* Melhorar acessibilidade;
* Otimizar desempenho;
* Configurar integração contínua com GitHub Actions.

## Autor

Desenvolvido por Igor Mendes.

GitHub: https://github.com/igaogv
# Here are your Instructions
