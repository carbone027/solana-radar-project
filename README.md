# 36'Oracle - Introdução 🚀
```
FALTA COLOCAR:

- formartar banco e dados recebidos 
- fotinhas do código 
- HTTP
```

A **36'Oracle** é uma API avançada projetada para otimizar a gestão de dados bancários utilizando **blockchain** com a plataforma **[Cartesi](https://cartesi.io/)**, que proporciona **alta eficiência, escalabilidade e segurança**. A tecnologia blockchain garante que os dados e transações sejam armazenados de maneira imutável e transparente, com cada registro disponível para verificação a qualquer momento. Aliando blockchain à **inteligência artificial**, a API oferece funcionalidades robustas para o tratamento de dados, categorização de clientes, previsão de perfis de investidor e recomendações personalizadas. 

### Principais Funcionalidades

- **🧹 Tratamento e Normalização de Dados**: Processo automatizado para limpar e organizar grandes volumes de dados bancários, com cada transação registrada no blockchain, garantindo transparência e integridade.
- **📊 Categorização de Clientes**: Identificação precisa dos perfis de investidor dos clientes, permitindo segmentação personalizada. A verificação de dados pode ser auditada diretamente no blockchain.
- **🔮 Previsão de Tipo de Investidor**: A IA prevê com precisão o tipo de investidor de cada cliente, categorizando-os para decisões estratégicas.
- **🔗 Requisição HTTP para Investidor**: O banco pode solicitar o tipo de investidor de qualquer cliente diretamente via requisição HTTP, obtendo rapidamente o perfil categorizado pela IA.

A API foi projetada para instituições financeiras que buscam **otimizar suas operações**, fornecendo informações valiosas sobre o perfil dos clientes e garantindo que os dados estejam sempre acessíveis e auditáveis via blockchain.

---

### Tecnologias Utilizadas 🛠️

- **Plataforma blockchain**: Desenvolvido utilizando a **[Cartesi](https://cartesi.io/)**, que oferece alta eficiência, segurança e escalabilidade para transações financeiras, além de suporte a contratos inteligentes para automação de processos.
- **Linguagem de Programação**: Implementado em [TypeScript](https://www.typescriptlang.org/), garantindo uma base de código robusta e com tipagem estática.
- **IA**: Desenvolvida em [Python](https://www.python.org/), utilizando bibliotecas de machine learning como [scikit-learn](https://scikit-learn.org/) para o treinamento e previsão de perfis de investidor.
- **API**: Arquitetura construída com [GraphQL](https://graphql.org/), proporcionando consultas flexíveis e precisas para os dados.
- **Framework**: Utiliza [ApolloServer](https://www.apollographql.com/docs/apollo-server/) para gerenciar as requisições GraphQL de maneira eficiente e modular.

---

### Como Começar 🚀

Entre em contato conosco para integrar a **36'Oracle** ao seu sistema bancário e aproveitar as vantagens de um processo automatizado e inteligente para gerenciamento de dados e investimentos. Com o blockchain implementado, você terá **total visibilidade e segurança** sobre as transações e recomendações. 

---

## Como Utilizar 👨‍💻👩‍💻

### 1. Login e Autenticação 🔑
A autenticação será realizada por meio de uma senha gerado pela equipe de suporte da **36'Oracle**, enviado via e-mail com as credenciais necessárias para o acesso. Assim que receber as credenciais, acesse o nosso [portal de login](www.google.com.br) e faça o login, assim podendo ter acesso completo a todas as funcionalidades.

---

### 2. Treinamento da IA 🤖
O treinamento da IA é totalmente automatizado e processado pela **API** com base nos dados fornecidos. Os dados são inicialmente enviados no formato **XML**, mas são convertidos em **JSON** para melhor compatibilidade e iteração com o sistema. Essa conversão melhora a eficiência do processamento de dados, além de facilitar a integração com outras ferramentas e sistemas. Para mais detalhes sobre o processo de treinamento e fluxo de dados, consulte a seção [Como Funciona](#como-funciona).

#### 2.1. Envio de Dados
Submeta a base de dados de seus clientes em um arquivo no formato **XML**, com as tags correspondentes às colunas adequadamente definidas. Esse arquivo será utilizado para alimentar o modelo da IA, que tratará os dados e ajustará seu algoritmo de **machine learning** para realizar a **classificação supervisionada** dos clientes. Todo o processo de envio, treinamento e ajustes será registrado na **blockchain Solana**, proporcionando **immutabilidade**, **auditabilidade** e **segurança** em cada transação de dados.

#### 2.2. Seleção de Features
Escolha as **features** (atributos) que deseja utilizar para melhorar a performance do modelo de IA. O processo de **feature selection** é fundamental para otimizar o treinamento do modelo, garantindo que apenas os atributos mais relevantes sejam considerados, reduzindo a dimensionalidade e aumentando a eficiência das previsões.

#### 2.3. Conclusão
Após a seleção de **features** e o treinamento do modelo, a IA processará os dados, categorizando os clientes de acordo com os perfis de investidor. Todos os resultados do processo estarão disponíveis para verificação no **ledger** da **blockchain Solana**, garantindo **transparência total** em todas as fases.

---

### 3. Previsão 🎯

As previsões e recomendações são geradas pela IA com base na análise dos dados fornecidos, utilizando **modelos preditivos**. Esses modelos são capazes de identificar padrões nos perfis dos clientes e fornecer **insights acionáveis** para recomendações personalizadas e estratégicas.

#### 3.1 Envio dos Dados do Cliente

Para solicitar o perfil de investidor de um cliente, realize uma requisição **HTTP** utilizando o framework **GraphQL**. O endpoint da API processará as informações enviadas e retornará o perfil de investidor categorizado pela IA, com base nos dados disponíveis.

#### 3.2 Geração e Leitura de Previsão

Após o envio dos dados do cliente, a IA analisará as informações utilizando algoritmos de **machine learning**, como **Random Forest**, para gerar previsões detalhadas sobre o perfil de investidor. O sistema retornará essas previsões em tempo real via **API**, permitindo que o banco ofereça recomendações personalizadas de investimentos com maior precisão e credibilidade, otimizando a estratégia de acordo com o perfil de risco de cada cliente.

---

### 4. Conclusão 🏁

Ao finalizar o processo, você terá acesso aos dados dos clientes, com o perfil de investidor retornado via requisição **HTTP** e todas as transações de dados registradas no **blockchain Solana**, garantindo **transparência**, **integridade** e **confiança** nas operações realizadas.

---

## Como Funciona 🔧

### 1. Recepção dos Dados 📦

O processo de recepção de dados começa com o envio de um arquivo no formato **[XML](https://www.w3.org/XML/)**, que contém um **dataframe** estruturado de acordo com as tags fornecidas. A API da **36'Oracle** realiza o processamento desse arquivo da seguinte forma:

- As **tags** especificadas são usadas para mapear as colunas do dataframe.
- O conteúdo do arquivo **XML** é transformado em um **dataframe** com base nas tags, que atuam como cabeçalhos das colunas.
- Após a transformação do **XML** em **JSON**, o conteúdo é otimizado para compatibilidade com a API e modelos de machine learning.

Com o **dataframe** gerado e os dados convertidos em **JSON**, a API inicia o processo de treinamento do modelo de IA baseado no algoritmo **[RandomForest](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)**. As colunas derivadas das tags são utilizadas como **features** (atributos), enquanto os dados em **JSON** formam o conteúdo principal para a análise.

---

### 2. Treinamento do Modelo de IA e Criação do Modelo Preditivo 🧠

O treinamento da IA é realizado automaticamente após a recepção dos dados e a preparação do **dataframe**. O modelo **RandomForest** é ajustado com base nos dados fornecidos, identificando padrões e criando um modelo preditivo robusto a partir do **JSON** gerado.

O processo de treinamento segue as seguintes etapas técnicas:
- **Pré-processamento dos dados**: As variáveis categóricas são codificadas (**Label Encoding** ou **One-Hot Encoding**), enquanto os dados numéricos são normalizados (**Standardization**), garantindo que o modelo processe corretamente diferentes tipos de dados.
- **Seleção de características (features)**: A técnica de **Eliminação Recursiva de Recursos (RFE)** é aplicada para selecionar as **features** mais relevantes, maximizando a eficiência do treinamento e a precisão das previsões.
- **Treinamento e Ajuste**: O modelo é ajustado utilizando os dados de entrada e validado com métricas de desempenho, como **accuracy**, **precision**, e **recall**. O objetivo é atingir uma acurácia mínima de 70%.
- **Registro no Blockchain**: Cada ajuste do modelo, assim como os resultados de treinamento, são registrados na **blockchain Solana** para garantir **transparência**, **segurança** e **auditabilidade**.

---

### 3. Categorização e Previsão 🔢

A categorização dos perfis de investidor e a previsão são realizadas dinamicamente pela IA, com base no modelo treinado. A IA identifica padrões utilizando dados de treinamento e validação, aplicando o algoritmo **RandomForest** para reduzir erros e maximizar a precisão das previsões.

- Cada previsão gerada pelo modelo é registrada na **blockchain** para assegurar **transparência** e **integridade**.
- As previsões incluem o perfil de investidor do cliente, permitindo decisões de investimento personalizadas com base em análises detalhadas.

---

### 4. Solicitação do Perfil de Investidor do Cliente 📝

Para obter o perfil de investidor de um cliente, basta realizar uma requisição **HTTP** utilizando a API. A IA processa os dados enviados em tempo real, aplicando o modelo de decisão baseado em **árvores de decisão** (como o **RandomForest**), e classifica com precisão o perfil de investidor do cliente.

- A classificação é personalizada para cada cliente, garantindo que as recomendações de investimento sejam adequadas ao perfil individual.
- Todos os dados processados e as previsões geradas são registrados no **blockchain** para garantir um processo seguro, auditável e transparente.

Este processo garante que todas as operações realizadas pela **36'Oracle** sejam totalmente seguras, auditáveis e transparentes, com o uso de tecnologias avançadas como **machine learning**, **blockchain** e **RandomForest** para fornecer previsões precisas e eficientes.

---

## Exemplos de Uso 💡:

### Treinamento da IA 
Explicação detalhada sobre como ocorre o treinamento.

### Envio de Dados
Processo de envio de dados e transformação de XML para JSON.

### Tratamento de Dados 
Processamento e tratamento dos dados com foco em segurança e auditabilidade no blockchain.

### Categorização dos Clientes
Como a IA realiza a categorização dos perfis de investidor e como isso impacta as recomendações.

---
