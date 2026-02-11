# 🚀 Projeto de Automação de Testes – Playwright (API)

Este projeto foi desenvolvido **exclusivamente como parte de uma etapa técnica de um processo seletivo** da empresa Mouts.

O objetivo principal **não é validar uma API real**, mas sim **demonstrar a arquitetura, organização de código e boas práticas** aplicadas à automação de testes de API utilizando Playwright.

Nenhuma URL ou endpoint real foi configurado propositalmente.

---

## 🎯 Objetivo do Projeto

Demonstrar como seria estruturado um projeto profissional de automação de testes de API, contemplando:

- Arquitetura escalável e manutenível
- Separação de responsabilidades
- Boas práticas de escrita de testes
- Estratégia de testes (positivos, negativos e contrato)
- Organização orientada a domínio
- Integração contínua (CI)

---

## ⚠️ Observação Importante

> **Este projeto não aponta para nenhuma API válida.**

Os endpoints, payloads e respostas simulam um **cenário hipotético** baseado no documento de requisitos fornecido na etapa técnica.

Portanto:
- A execução local dos testes **pode falhar por ausência de `baseURL`**
- Isso é **intencional**
- O foco da avaliação é a **estrutura do código e a estratégia de testes**

---

## 🧩 Stack Tecnológico

- Node.js  
- Playwright Test (API)  
- JavaScript  
- GitHub Actions (CI)  
- JSON Schema Validation  

---

## 📁 Estrutura do Projeto

```text
├── tests/              # Specs organizadas por domínio funcional
│   └── metas/
│       ├── criacao
│       ├── atribuicao
│       └── atingimento
├── services/           # Camada de serviços (abstração da API)
├── fixtures/           # Dados de teste reutilizáveis
├── utils/schema/       # Schemas para validação de contrato
├── hooks/              # Hooks globais de execução
├── .github/workflows   # Pipeline de Integração Contínua
├── playwright.config.js
└── README.md

## 🎯 Escopo do Sistema Testado
- Cadastro de Metas
- Atribuição de Metas
- Acompanhamento de Atingimento

## 🧠 Estratégia de Testes
- Foco em regra de negócio
- Abstração de chamadas HTTP
- Testes escaláveis e manuteníveis
- Uso de tags (@smoke, @regression)

## ▶️ Como Executar
npm install  
npx playwright test

## 🔄 CI/CD
Execução automatizada via GitHub Actions.



