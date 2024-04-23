# Teste Frontend - LOGAROO 💻

## Descrição ℹ️
Este projeto é uma aplicação web desenvolvida em React com TypeScript e Styled Components para um teste frontend na startup Logaroo.

- link do video onde demonstro a aplicação rodando: https://youtu.be/gC3nHXTDU04
- link para a aplicação: https://logaroo.netlify.app/

## Como Rodar o Projeto ▶️
1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu computador.
3. Navegue até o diretório do projeto no terminal.
4. Instale as dependências executando o comando: <code>npm install</code>
5. Inicie a aplicação usando o comando: <code>npm run dev</code>

## Bibliotecas Instaladas 📚
- **ViteJS**: É uma ferramenta de construção de projetos frontend que se destina a oferecer uma experiência de desenvolvimento mais rápida e leve para projetos web modernos.
- **React-hook-form**: Para gerenciar formulários. Mesmo que a aplicação seja simples com apenas dois campos de input e um botão, optei por usar esta biblioteca para facilitar o gerenciamento dos campos.
- **React-toastify**: Componente de toast utilizado para mostrar mensagens para o usuário.
- **Axios**: Utilizado para fazer requisições HTTP.
- **Tanstack/react-table**: Componente de tabela.
- **ESLint**: Análise estática para encontrar problemas rapidamente.
- **Styled-Components**: estilização dos componentes

## Estrutura do Projeto 📂
```plaintext
│
├── public/                  # Arquivos públicos
├── src/                     # Código-fonte da aplicação
│   ├── assets/              # Recursos: fonts, imagens e ícones
│   ├── components/          # Componentes React
│   ├── context/             # Context APIs
│   ├── pages/               # Páginas da aplicação
│   ├── styles/              # Estilos globais
│   ├── main.tsx             # Arquivo react main
│   ├── vite-env.d.ts        # Arquivo de configuração do Vite
│   └── App.tsx              # Componente principal da aplicação
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Informações sobre o projeto e dependências
├── ...                      # Outros arquivos de configurações
└── README.md                # Este arquivo
```
## Algumas Observações 📝
Eu tentei seguir o style guide ao máximo possível, contudo, alguns componentes precisavam de estilização que o style guide não oferecia, como por exemplo o header com o nome da Logaroo. No style guide não havia nada determinando o tamanho ideal desse componente, bem como o tamanho ideal do nome 'Logaroo'. Nesse caso, tive que estilizar da minha maneira com o objetivo de ficar agradável ao style guide. Creio que consegui.

Outro ponto, no style guide ele fornece uma cor verde como cor principal, eu assumi que essa cor está relacionada apenas ao input. Usei a cor laranja disponibilizada no wireframe para usar como cor principal. O verde não combina com a Logaroo, o laranja sim :)

Outra observação:
Foi fornecido os links:
- https://bitbucket.org/logaroodev/frontend/src/master/ 
- https://whimsical.com/logaroo-teste-front-end-8bCv4pDvGgkYLv6QotCKeo

no primeiro link diz: "3: O(A) usuário(a) deve poder utilizar o input de busca para realizar uma busca por um post"

Contudo, no wireframe não tem esse campo de pesquisa. Visando conseguir realizar essa funcionalidade eu criei esse campo.