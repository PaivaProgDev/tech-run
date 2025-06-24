# 🏃‍♂️Tech Run — Seu Monitor Pessoal de Corridas
## O Tech Run é uma aplicação web moderna criada para ajudar corredores a registrar, acompanhar e visualizar seu desempenho ao longo do tempo, de forma prática e segura.

![postspark_export_2025-06-24_13-57-05](https://github.com/user-attachments/assets/82257964-c320-4a4d-ad1b-2e92f44e9bf6)

A plataforma permite que cada usuário crie sua conta pessoal, com autenticação segura via e-mail e senha, garantindo que apenas ele possa acessar e visualizar seus próprios dados.

### ⚙️ Funcionalidades principais
✅ Cadastro de corridas: o usuário registra manualmente cada corrida com informações como distância, tempo, calorias gastas, e data.

📊 Dashboard inteligente: um painel visual exibe gráficos e estatísticas de desempenho individual, como somatório de calorias, ritmo médio e evolução das distâncias.

🔐 Autenticação de usuários: cada pessoa tem acesso exclusivo aos seus dados. O login é feito via Firebase Auth, com validações e proteção de rotas.

💾 Armazenamento em tempo real: os dados de cada corrida são salvos no Firebase Firestore e associados ao usuário autenticado, garantindo que cada conta veja apenas o seu histórico.

📱 Design responsivo e moderno: o layout é adaptado para celular, tablet e desktop, com foco em uma experiência fluida.

![postspark_export_2025-06-24_13-58-17](https://github.com/user-attachments/assets/25f5a42b-da8e-4755-9973-43b5dedd827e)

### 🧠 Tecnologias utilizadas
React – Para construção da interface do usuário

Firebase Authentication – Para login, registro e autenticação segura

Firebase Firestore – Para armazenar os dados de cada usuário separadamente

React Router – Para navegação entre as páginas, com rotas protegidas

Vercel – Hospedagem do projeto, garantindo velocidade e disponibilidade

CSS Flex/Grid + Tailwind (opcional) – Para responsividade e estilo moderno


### 🎯 Objetivo
O Tech Run foi desenvolvido com o propósito de ser um diário digital de corrida: uma ferramenta onde qualquer pessoa, independente do nível, pode acompanhar sua evolução com dados claros, seguros e bem organizados.

Cada usuário tem uma experiência personalizada, com total controle sobre seus registros, metas e progresso.

### [Clique aqui para acessar o projeto](https://tech-run.vercel.app)


