# Visualização Interativa e Exploratória de Dados Globais da COVID-19

Este projeto apresenta uma plataforma web interativa para visualização, análise e contextualização histórica da pandemia de COVID-19 ao redor do mundo. A solução permite explorar dados globais de forma intuitiva e visualmente rica, combinando informações quantitativas, contextuais e ilustrativas.

## 🎯 Objetivos

- Facilitar a compreensão dos dados da COVID-19 por meio de visualizações interativas.
- Permitir análise exploratória de séries temporais por país e por região.
- Contextualizar a evolução da pandemia com linha do tempo histórica e galeria de imagens.
- Integrar diversas fontes públicas e abertas de dados confiáveis.

## 🔧 Tecnologias Utilizadas

- **D3.js** — Renderização de mapas interativos e gráficos de séries temporais.
- **HTML, CSS, JavaScript** — Desenvolvimento da interface web responsiva.
- **APIs públicas:**
  - [`disease.sh`](https://disease.sh/) — Dados de casos e mortes da COVID-19.
  - [`REST Countries`](https://restcountries.com/) — Informações demográficas e bandeiras dos países.
  - [`Unsplash`](https://unsplash.com/developers) — Imagens ilustrativas de países e pandemia.

## ⚙️ Funcionalidades

- **Mapa mundial interativo:**
  - Visualização global de casos ou mortes acumuladas.
  - Interação por clique em cada país.
- **Painel Modal Detalhado:**
  - Exibição de dados demográficos e epidemiológicos de cada país.
  - Gráfico temporal de evolução semanal.
  - Bandeira, imagem representativa e informações geográficas.
- **Linha do Tempo Histórica:**
  - Principais marcos globais da pandemia (início, variantes, vacinação, fim da emergência).
- **Galeria Visual:**
  - Montagem com imagens marcantes da pandemia no mundo.
- **Responsivo e executável localmente.**

## 🏗️ Arquitetura Simplificada

- 100% cliente (frontend puro).
- Nenhum backend necessário.
- Atualização de dados em tempo real via chamadas às APIs públicas.

## 📂 Estrutura dos Arquivos

- /index.html --> página principal
- /app.js --> lógica principal de carregamento e interatividade
- /map.js --> configuração e renderização do mapa mundial
- /utils.js --> funções auxiliares de processamento
- /style.css --> estilos visuais do sistema
- /files/covid_data.csv --> base de dados CSV inicial (para testes locais)

## 📊 Fontes de Dados

- **Johns Hopkins University (via disease.sh)**
- **World Health Organization (WHO)**
- **REST Countries**
- **Unsplash Image Repository**

## 🚀 Como Executar Localmente

> O projeto não exige backend, servidor de banco de dados ou backend API próprio.

1. Clone o repositório.
2. Abra um terminal na pasta do projeto.
3. Rode um servidor local (exemplo com Python 3): `python -m http.server 8000`
4. Acesse `http://localhost:8000` no seu navegador.

> **Obs:** Algumas chamadas às APIs externas podem requerer chave de acesso pública (ex: Unsplash).

## 💡 Possíveis Extensões Futuras

- Integração de dados socioeconômicos e hospitalares.
- Gráficos comparativos lado-a-lado entre países.
- Camadas de políticas públicas e medidas restritivas.
- Criação de API colaborativa para expansão contínua dos dados.
- Interface multilíngue e aprimoramento mobile.

## 👩‍💻 Autoria

- Mariana Oliveira
- EMAP — FGV Rio de Janeiro

## 📄 Licença

Projeto acadêmico para fins educacionais e exploratórios.
