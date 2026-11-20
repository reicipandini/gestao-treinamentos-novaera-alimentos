# 🧀 Sistema de Gestão de Treinamentos - NovaEra Alimentos

> Sistema web corporativo voltado para o gerenciamento de funcionários, controle de treinamentos obrigatórios, alocação de setores e recomendações inteligentes de cursos na indústria alimentícia.

---

## 🚀 Sobre o Projeto

O **Gestão de Treinamentos - NovaEra Alimentos** é uma aplicação desenvolvida para facilitar o trabalho do RH e de gestores industriais. Ele permite cadastrar colaboradores, monitorar o andamento de cursos de capacitação técnica (como *Boas Práticas de Fabricação (BPF)*, *APPCC*, *ISO 22000*, etc.) e visualizar métricas em tempo real através de um **Dashboard** interativo.

---

## 🗄️ Banco de Dados (Google Firebase)

O projeto utiliza o **Google Firebase** (Cloud Firestore / Realtime Database) como infraestrutura de banco de dados em nuvem:

* **Persistência em Tempo Real:** Todos os cadastros de funcionários, atualizações de status de cursos e edições são salvos e sincronizados instantaneamente na nuvem.
* **Escalabilidade:** Permite que múltiplos supervisores e administradores acessem o painel simultaneamente de diferentes computadores sem perder dados.
* **Agilidade:** Conectado via SDK web, o Firebase garante respostas rápidas na renderização das tabelas de funcionários.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 & CSS3:** Estruturação da interface estilo painel administrativo (dashboard) e estilização responsiva.
* **JavaScript (ES6+):** Lógica da aplicação, manipulação dinâmica do DOM e conexão com a nuvem.
* **Google Firebase:** Banco de dados NoSQL em nuvem para armazenamento seguro dos registros de colaboradores e treinamentos.

---

## 📊 Principais Funcionalidades da Interface

1. **Dashboard de Métricas:** Contadores rápidos de total de funcionários, cursos concluídos, treinamentos em andamento e pendências.
2. **Cadastro de Colaboradores:** Formulário com seleção de cargos, setores, tempo de empresa e áreas de treinamento (APPCC, BPF, POP, ISO 22000, etc.).
3. **Tabela de Gestão:** Listagem dinâmica dos funcionários cadastrados com botões diretos para edição e exclusão.
4. **Recomendação Inteligente:** Área dedicada a sugerir trilhas de capacitação ideais com base no funcionário selecionado.

---

## 🏃‍♂️ Como Executar / Utilizar

1. Acesse a versão online diretamente pelo **GitHub Pages** do repositório.
2. Para rodar localmente, clone o repositório, configure as credenciais do seu projeto **Firebase** no código JavaScript e abra o arquivo `index.html` no navegador.
