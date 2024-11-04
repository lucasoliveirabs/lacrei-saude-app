
# **Lacrei Saúde - Frontend**

## **Descrição**
Este é o frontend do projeto **Lacrei Saúde**, desenvolvido em **Next.js** e projetada com uma navegação intuitiva que segue o guia de estilo da Lacrei Saúde. Consiste em dois formulários, um para cadastro de profissional e outro para cadastro de consulta.
O frontend está disponível em https://lacrei-saude-app.vercel.app/cadastro-profissional. Antes, prefira configurar e rodar o backend localmente.

---

## **Requisitos**

Confirme ter os seguintes softwares instalados:

- **Node.js 16+**: [Instalar Node.js](https://nodejs.org/en/download/)
- **npm** (vem junto com Node.js) ou **yarn** como gerenciador de pacotes.
- **Git**: [Instalar Git](https://git-scm.com/downloads)

---

## **Configuração do Projeto**

1. **Instalar as Dependências**

   Você pode utilizar **npm** ou **yarn**:
   ```bash
   npm install
   # ou
   yarn install
   ```
---

## **Executar a Aplicação em Desenvolvimento**

Para que a aplicação funcione corretamente, crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias. Por exemplo:

```env
LOCALHOST_API_BASE_URL=https://localhost:8000/api
```

Então: 

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)
