<div align="center">
  <img src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzh4VWh0RzVrbGdFN1JzTzh1d21oTllvWDAifQ" alt="TorceHolder Logo" width="120" />
  <h1>TorceHolder</h1>
  <p><strong>O Cofre Digital de Staking e Gamificação para o Fan Token $SPFC na Chiliz Chain.</strong></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/github/last-commit/DGuedz/TorceHolder?style=for-the-badge&logo=github&color=red" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/DGuedz/TorceHolder?style=for-the-badge&logo=javascript&color=yellow" alt="Top Language">
    <img src="https://img.shields.io/badge/Chiliz_Chain-EVM_Compatible-red?style=for-the-badge&logo=ethereum" alt="Chiliz Chain">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  </p>
</div>

##  Visão Geral do Projeto

O **TorceHolder** é uma plataforma Web3 desenvolvida para o **SPFC Hackathon**, com a missão de agregar utilidade real e engajamento ao Fan Token **$SPFC**. A solução transforma o token de um ativo puramente especulativo em uma ferramenta de fidelidade, permitindo que os torcedores do São Paulo FC façam "stake" de seus tokens para acumular pontos e resgatar benefícios exclusivos no mundo real.

A plataforma visa fortalecer a comunidade, aumentar a demanda pelo token e criar um ecossistema sustentável em torno do clube e seus torcedores, tudo isso construído sobre a infraestrutura segura e focada em esportes da **Chiliz Chain**.

---

##  Funcionalidades Implementadas (Protótipo )

*   **Onboarding Web3:** Fluxo completo de autenticação simulada via conexão de carteira digital.
*   **Dashboard do Torcedor:** Painel de controle para visualização de saldo de `$SPFC`, pontos acumulados, tier de fidelidade e streak de engajamento.
*   **Cofre de Staking (Staking Vault):**
    *   Depósito de tokens `$SPFC` em períodos de bloqueio flexíveis (30, 90, 180, 365 dias).
    *   Sistema de **APY (Rendimento Anual Percentual)** progressivo que incentiva o compromisso de longo prazo.
    *   Calculadora de recompensas em tempo real para prever os ganhos.
*   **Marketplace de Benefícios:**
    *   Catálogo de recompensas resgatáveis com os pontos acumulados.
    *   Exemplos: Descontos no programa Sócio Torcedor, compra de ingressos, vouchers para a loja oficial e acesso a experiências VIP.

---

##  Arquitetura e Tecnologias

Este projeto combina tecnologias de ponta do ecossistema Web2 e Web3 para entregar uma experiência de usuário fluida e uma lógica de negócios descentralizada.

| Camada       | Tecnologia                                                              | Propósito                                             |
| :----------- | :---------------------------------------------------------------------- | :---------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white ) ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white ) ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white ) | Interface de usuário reativa, responsiva e otimizada. |
| **Blockchain** | ![Solidity](https://img.shields.io/badge/-Solidity-363636?logo=solidity&logoColor=white ) ![Hardhat](https://img.shields.io/badge/-Hardhat-fff100?logo=hardhat&logoColor=black ) ![Ethers.js](https://img.shields.io/badge/-Ethers.js-2C56F6 ) | Smart Contracts para staking, recompensas e governança. |
| **Infra/Deploy** | ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white ) ![Chiliz Chain](https://img.shields.io/badge/-Chiliz_Chain-red ) | Hospedagem de alta performance e execução na blockchain. |

---

##  Como Executar o Projeto Localmente

Para executar o protótipo de frontend em sua máquina local, siga os passos abaixo.

1.  **Pré-requisitos:**
    *   [Node.js](https://nodejs.org/en/ ) (versão 18.x ou superior)
    *   [Git](https://git-scm.com/ )

2.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DGuedz/TorceHolder.git
    cd TorceHolder
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:3000`.

---

## 🗺️ Roadmap de Desenvolvimento

O projeto segue um roadmap claro para evoluir de um protótipo para um dApp totalmente funcional.

- [x] **Fase 1: Prototipação e UI/UX** - Design e desenvolvimento da interface do usuário.
- [ ] **Fase 2: Desenvolvimento dos Smart Contracts** - Codificação dos contratos de Staking e Recompensas em Solidity.
- [ ] **Fase 3: Testes e Segurança** - Implementação de testes unitários e de integração; auditoria de segurança.
- [ ] **Fase 4: Deploy e Integração** - Implantação dos contratos na Chiliz Chain (Testnet ) e conexão com o frontend.
- [ ] **Fase 5: Lançamento (Mainnet)** - Implantação na rede principal da Chiliz.

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<div align="center">
  <small>Desenvolvido por DGuedz Black Mindz para o SPFC Hackathon.</small>
</div>
