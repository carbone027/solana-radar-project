# 36'Oracle - Introdução 🚀

A **36'Oracle** é uma API avançada projetada para otimizar a gestão de dados bancários utilizando **blockchain** com a plataforma **[Solana](https://solana.com/)**, que proporciona **alta eficiência, escalabilidade e segurança**. A tecnologia blockchain garante que os dados e transações sejam armazenados de maneira imutável e transparente, com cada registro disponível para verificação a qualquer momento. Aliando blockchain à **inteligência artificial**, a API oferece funcionalidades robustas para o tratamento de dados, categorização de clientes, previsão de perfis de investidor e recomendações personalizadas. 

### Principais Funcionalidades

- **🧹 Tratamento e Normalização de Dados**: Processo automatizado para limpar e organizar grandes volumes de dados bancários, com cada transação registrada no blockchain, garantindo transparência e integridade.
- **📊 Categorização de Clientes**: Identificação precisa dos perfis de investidor dos clientes, permitindo segmentação personalizada. A verificação de dados pode ser auditada diretamente no blockchain.
- **🔮 Previsão de Tipo de Investidor**: A IA prevê com precisão o tipo de investidor de cada cliente, categorizando-os para decisões estratégicas.
- **🔗 Requisição HTTP para Investidor**: O banco pode solicitar o tipo de investidor de qualquer cliente diretamente via requisição HTTP, obtendo rapidamente o perfil categorizado pela IA.

A API foi projetada para instituições financeiras que buscam **otimizar suas operações**, fornecendo informações valiosas sobre o perfil dos clientes e garantindo que os dados estejam sempre acessíveis e auditáveis via blockchain.

---

### Tecnologias Utilizadas 🛠️

- **Plataforma blockchain**: Desenvolvido utilizando a [Solana](https://solana.com/), que oferece alta eficiência, segurança e escalabilidade para transações financeiras, além de suporte a contratos inteligentes para automação de processos.
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
A autenticação será fornecida pela equipe de suporte da 36'Oracle, que enviará, via e-mail, as credenciais necessárias para o acesso. Assim que receber essas informações, acesse o nosso [portal de login](www.google.com.br) e faça o login, permitindo que você utilize todas as funcionalidades dos nossos serviços.

### 2. Treinamento da IA 🤖
O treinamento da IA é feito automaticamente pelo sistema com base nos dados fornecidos via **XML**. Para entender mais detalhes sobre o processo, confira o tópico [Como Funciona](#como-funciona).

#### 2.1. Envio de Dados 
Faça o upload da base de dados dos seus clientes utilizando um arquivo no formato **XML** e defina as tags correspondentes aos nomes das colunas. Essa base será utilizada pela IA para o treinamento, permitindo que o sistema aprenda e categorize os clientes de forma precisa e personalizada. Cada etapa do envio e processamento dos dados, incluindo o treinamento da IA, será registrada na **blockchain** da **Solana**, garantindo total transparência, auditabilidade e segurança dos dados ao longo de todo o processo.

#### 2.2. Seleção de Features
Escolha e insira as features que deseja utilizar no modelo de IA para otimizar o processo de treinamento e obter as melhores previsões com base nos dados fornecidos.


#### 2.3. Conclusão 
Após o processo de seleção e treinamento, a IA processará e categorizará os clientes, otimizando-os para futuras análises. Todos os resultados podem ser verificados no blockchain.

---

### 3. Previsão 🎯

As previsões e recomendações são geradas pela IA por meio da análise dos dados fornecidos, permitindo decisões informadas com base em padrões identificados no perfil dos clientes.

#### 3.1 Envio dos Dados do Cliente 
Realize uma requisição HTTP com os dados do cliente para obter o perfil de investidor. A IA processará as informações e retornará o tipo de investidor do cliente na resposta da requisição.

#### 3.2 Leitura de Previsão 
Após o envio, a IA gerará previsões baseadas nos dados fornecidos. O banco poderá fazer uma requisição HTTP para receber diretamente o tipo de investidor que aquele cliente é, garantindo recomendações personalizadas de investimento.

---

### 4. Conclusão 🏁
Ao completar o processo, você terá os dados dos clientes tratados, o tipo de investidor retornado via HTTP e todas as transações registradas no blockchain, proporcionando **total transparência e confiabilidade**.

---

## Como Funciona 🔧

### 1. Recepção dos Dados 📦

O processo de recepção de dados envolve o envio de uma lista de tags e um arquivo no formato **[XML](https://www.w3.org/XML/)** que contém um dataframe. A API processa essas informações da seguinte forma:

- As **tags** são usadas para definir as colunas do dataframe.
- O conteúdo do arquivo **XML** é transformado em um dataframe, utilizando as tags como cabeçalhos das colunas.

Com o dataframe gerado, a API inicia o processo de treinamento do modelo **[RandomForest](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)**, utilizando as colunas derivadas das tags como atributos e os dados do XML como conteúdo. Cada etapa do processamento é registrada no blockchain para garantir que todo o fluxo seja transparente e auditável.

### 2. Treinamento do Modelo de IA 🧠

O treinamento da IA acontece automaticamente após a recepção dos dados e a preparação do dataframe. O modelo de **RandomForest** é ajustado com base nos dados fornecidos, identificando padrões e criando um modelo preditivo. A cada novo conjunto de dados enviado, o modelo é refinado e otimizado para aumentar a precisão das previsões, com todos os ajustes e resultados sendo armazenados no blockchain.

- A IA aprende com os dados fornecidos, ajustando seus parâmetros com base nas informações contidas no dataframe.
- O modelo é avaliado para garantir que esteja funcionando corretamente.
- Caso o desempenho do modelo atenda aos critérios de precisão, ele é utilizado para previsões futuras e o perfil de investidor é retornado via HTTP, com todos os registros de desempenho armazenados na blockchain.

---

### 4. Categorização e Previsão 🔢

A categorização e previsão são realizadas dinamicamente pelo modelo. A IA identifica padrões com base nos dados de treino e validação, otimizando o processo com o uso de **RandomForest** para minimizar erros e maximizar a precisão. Cada resultado gerado é registrado no blockchain, garantindo **total transparência**.

---

### 5. Solicitar Tipo de Investidor do Cliente 📝
Realize uma requisição HTTP para obter todas as informações sobre o perfil de investidor do cliente. Os dados são processados pela IA utilizando o sistema de árvores de decisão, garantindo uma classificação precisa e personalizada.

---

## Exemplos de Uso 💡:

### Treinamento da IA 
Todo o processo de treinamento da IA, incluindo os dados fornecidos e as etapas do modelo, são registrados no blockchain, garantindo que todo o histórico seja imutável e transparente.

### Envio de Dados
O envio de dados para treinamento e previsão pode ser auditado por meio dos hashes gerados pela blockchain, garantindo a integridade dos dados.

### Tratamento de Dados 
Os dados tratados pela IA podem ser verificados e auditados no blockchain, assegurando que as informações estejam corretas e não tenham sido alteradas.

### Categorização dos Clientes
A categorização dos clientes feita pela IA pode ser rastreada e verificada no blockchain, assegurando que a classificação foi feita de maneira precisa e auditável.
