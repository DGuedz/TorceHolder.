## TorceHolder - O Cofre Digital do Torcedor do SPFC

**TorceHolder** é um protótipo de alta fidelidade de uma plataforma DeFi e de gamificação, construída sobre a **Chiliz Chain**. O projeto foi desenvolvido para o **SPFC Hackathon** com o objetivo de criar um caso de uso sustentável e de alto engajamento para o Fan Token $SPFC, transformando-o de um ativo especulativo em uma ferramenta de fidelidade com benefícios reais.

Nossa solução permite que torcedores façam "stake" de seus tokens em um ambiente seguro para acumular pontos, subir de nível em um sistema de Tiers e resgatar recompensas tangíveis, como descontos em ingressos, produtos e experiências exclusivas.

**[Acesse a Demonstração Ao Vivo](https://torceholder.vercel.app )**

---

## Tabela de Conteúdos

1.  [Visão Geral da Solução](#-visão-geral-da-solução)
2.  [Fluxo de Telas e Funcionalidades](#-fluxo-de-telas-e-funcionalidades)
3.  [Stack Tecnológico](#-stack-tecnológico)
4.  [Como Executar o Projeto Localmente](#-como-executar-o-projeto-localmente)
5.  [Estrutura do Projeto](#-estrutura-do-projeto)
6.  [Próximos Passos](#-próximos-passos)

---

## Visão Geral da Solução

O TorceHolder ataca uma oportunidade central no mercado de Fan Tokens: a falta de utilidade contínua. Nossa plataforma introduz um ciclo de engajamento virtuoso:

1.  **STAKE:** O torcedor deposita seus tokens $SPFC no cofre digital.
2.  **EARN:** O valor em stake gera pontos passivamente, recompensando a posse a longo prazo.
3.  **REDEEM:** Os pontos acumulados são trocados por benefícios reais, conectando o ativo digital ao mundo físico do clube.

Este ciclo aumenta a demanda pelo token, diminui a volatilidade e fortalece o vínculo entre o clube e sua base de fãs.

---

## Fluxo de Telas e Funcionalidades

O protótipo implementa um fluxo de usuário completo com 5 telas principais:

| Tela | Funcionalidade Chave | Status |
| :--- | :--- | :--- |
| **Splash Screen** | Apresentação inicial da marca e carregamento da aplicação. | ✅ Completo |
| **Login Screen** | Ponto de entrada para o usuário conectar sua carteira digital (simulado). | ✅ Completo |
| **Dashboard** | Visão geral da posição do usuário: saldo de tokens, total de pontos, tier e streak de engajamento. | ✅ Completo |
| **Stake Screen** | Interface para o usuário depositar (fazer stake) de seus tokens, com seleção de período e cálculo de APY. | ✅ Completo |
| **Benefits Screen** | Catálogo de recompensas onde o usuário pode visualizar como usar seus pontos acumulados. | ✅ Completo |

---

## Stack Tecnológico

Para a construção deste protótipo, utilizamos tecnologias modernas e eficientes, focadas em uma experiência de usuário de alta qualidade.

-   **Frontend:** **React 18** com uso extensivo de Hooks (`useState`, `useEffect`) para um gerenciamento de estado reativo e declarativo.
-   **Estilização:** **Tailwind CSS**, permitindo um design responsivo e customizável de forma rápida e consistente.
-   **Componentes de UI:** **Lucide-React** para uma iconografia limpa, leve e consistente em toda a aplicação.
-   **Simulação Web3:** A lógica de interação com a blockchain (conexão de carteira, transações) foi simulada com `async/await` e `setTimeout` para demonstrar o fluxo de usuário sem a necessidade de contratos complexos no escopo do hackathon.

---

## Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento.

### **Pré-requisitos**

-   Node.js (v18 ou superior)
-   npm ou yarn

### **Instalação e Execução**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DGuedz/TorceHolder.git
    cd TorceHolder
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

4.  A aplicação estará disponível em **[http://localhost:3000](http://localhost:3000 )**.

---

## 📂 Estrutura do Projeto

A estrutura de pastas foi organizada para promover a modularidade, embora, para a agilidade do hackathon, os componentes tenham sido mantidos em um único arquivo principal (`src/App.js`).

TorceHolder/
├── public/               # Arquivos estáticos, incluindo index.html
├── src/
│   ├── components/       # (Estrutura preparada para futura refatoração)
│   ├── hooks/            # (Estrutura preparada para futura refatoração)
│   ├── screens/          # (Estrutura preparada para futura refatoração)
│   ├── App.js            # Componente raiz com toda a lógica e UI do protótipo
│   ├── index.css         # Estilos globais e diretivas do Tailwind CSS
│   └── index.js          # Ponto de entrada da aplicação React
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências e scripts
└── README.md             # Esta documentação
Plain Text

---

## Próximos Passos

Este protótipo estabelece uma base sólida. Os próximos passos para transformar o TorceHolder em um produto de produção seriam:

1.  **Desenvolvimento dos Smart Contracts:** Escrever, testar e auditar os contratos inteligentes na Chiliz Chain para as funcionalidades de stake e rewards.
2.  **Integração Web3 Real:** Substituir a lógica simulada por chamadas reais aos contratos utilizando Ethers.js.
3.  **Backend de Apoio:** Construir um serviço de backend para gerenciar metadados de benefícios e dados de usuários que não precisam estar on-chain.
4.  **Lançamento Beta:** Conduzir um lançamento fechado com um grupo de torcedores para coletar feedback e refinar a experiência.
