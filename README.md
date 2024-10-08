# 36'Oracle - Introdução

A **36'Oracle** é uma API poderosa projetada para facilitar a gestão de dados bancários por meio de **blockchain**, utilizando a plataforma **Solana** para garantir **alta eficiência, escalabilidade e segurança**. A tecnologia blockchain permite um armazenamento imutável e transparente dos dados, onde cada transação é registrada de forma segura e pode ser verificada a qualquer momento. Combinando blockchain com **inteligência artificial**, a API oferece funcionalidades avançadas para tratamento de dados, categorização de clientes, previsão de perfis de investimento e recomendações personalizadas para cada cliente.

### Principais Funcionalidades

- **Tratamento e Normalização de Dados**: Processo automatizado para limpar e organizar grandes volumes de dados bancários, com cada transação registrada no blockchain, garantindo transparência e integridade.
- **Categorização de Clientes**: Identificação precisa dos perfis de clientes, permitindo segmentação personalizada e a verificação de dados por meio de hash armazenado no blockchain.
- **Previsão do Tipo de Investidor**: IA avançada para prever o comportamento financeiro e perfil de risco de cada cliente, com a garantia de que os dados utilizados no treinamento são verificáveis no blockchain.
- **Recomendações de Investimentos**: Sugestões estratégicas com base em análise de dados e previsões personalizadas, onde cada recomendação pode ser auditada por meio dos registros imutáveis no blockchain.

A API foi criada para atender instituições financeiras que buscam **otimizar suas operações**, fornecendo insights valiosos e recomendações com base no perfil e histórico de cada cliente, além de uma infraestrutura de dados baseada em blockchain que assegura transparência, confiança e segurança.

### Requisitos

- **Plataforma blockchain**: Desenvolvido utilizando a [Solana](https://solana.com/), que oferece alta eficiência, segurança e escalabilidade para transações financeiras, além de suporte a contratos inteligentes para automação de processos.
- **Linguagem de programação**: Implementado em [TypeScript](https://www.typescriptlang.org/), garantindo uma base de código robusta e com tipagem estática.
- **API**: Arquitetura construída com [GraphQL](https://graphql.org/), proporcionando consultas flexíveis e precisas para os dados.
- **Framework**: Utiliza [ApolloServer](https://www.apollographql.com/docs/apollo-server/) para gerenciar as requisições GraphQL de maneira eficiente e modular.

### Como Começar

Entre em contato conosco para integrar a 36'Oracle ao seu sistema bancário e aproveitar as vantagens de um processo automatizado e inteligente para gerenciamento de dados e investimentos. Com o blockchain implementado, você terá total visibilidade e segurança sobre as transações e recomendações.

## Como utilizar

### 1. Login e autenticação
A autenticação será fornecida pela equipe de suporte da 36'Oracle, que enviará, via e-mail, as credenciais necessárias para o acesso. Assim que receber essas informações, acesse o nosso [portal de login](www.google.com.br) e faça o login, permitindo que você utilize todas as funcionalidades dos nossos serviços.

### 2. Treinamento da IA
O treinamento da IA é feito automaticamente pelo sistema com base nos dados fornecidos. Para entender mais detalhes sobre o processo, confira o tópico [Como Funciona](#como-funciona).

#### 2.1. Envio de dados
Envie a base de dados dos seus clientes por meio de **[inserir método de envio, exemplo: API ou upload de arquivo]**. Essa base será utilizada para o treinamento da IA, permitindo que o sistema aprenda e categorize seus clientes de forma personalizada. Todas as transações e processos de treinamento são registrados no blockchain, garantindo auditabilidade e segurança dos dados.

#### 2.2. Seleção de features
Após o envio dos dados, selecione as características que deseja utilizar para o treinamento da IA. As opções disponíveis são:
- **xxx**: [descrição]
- **yyy**: [descrição]
- **zzz**: [descrição]

#### 2.3. Finalização
Após o processo de seleção e treinamento, a IA processará e tratará os dados, otimizando-os para futuras análises e previsões. Todos os resultados gerados e tratados podem ser verificados no blockchain por meio de hashes registrados durante o processamento.

### 3. Previsão e recomendação

#### 3.1 Envio dos dados do cliente
Envie um arquivo no formato **[especificar formato]** contendo os dados do cliente, utilizando o **[método de envio, ex: API ou upload de arquivo]**, para que a IA possa utilizar os modelos já treinados. As previsões e recomendações geradas são registradas no blockchain, garantindo transparência e segurança para os dados processados.

#### 3.2 Leitura de previsão
Após o envio, a IA gerará previsões baseadas nos dados fornecidos. Você pode acessar essas previsões diretamente no painel ou através de uma requisição via **[especificar método, ex: API]**, sendo possível auditar os dados diretamente no blockchain.

#### 3.3 Leitura da recomendação
Além das previsões, a IA fornecerá recomendações personalizadas de investimentos para cada cliente. Essas recomendações estarão disponíveis para consulta no mesmo formato que as previsões e poderão ser verificadas no blockchain, assegurando a confiabilidade das informações.

### 4. Finalização
Ao completar o processo, você terá os dados dos clientes tratados, as previsões geradas e as recomendações de investimento prontas para serem utilizadas. Por estar implementada em blockchain, será possível analisar via hash as informações geradas pela blockchain, proporcionando total transparência e confiabilidade.

## Como funciona:

### 1. Recepção dos Dados

O processo de recepção de dados envolve o envio de uma lista de tags e um arquivo no formato **[XML](https://www.w3.org/XML/)** que contém um dataframe. A API processa essas informações da seguinte forma:

- As **tags** são usadas para definir as colunas do dataframe.
- O conteúdo do arquivo **XML** é transformado em um dataframe, utilizando as tags como cabeçalhos das colunas.
  
Com o dataframe gerado, a API inicia o processo de treinamento do modelo **[RandomForest](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)**, utilizando as colunas derivadas das tags como atributos, e os dados do XML como conteúdo. Cada etapa do processamento é registrada no blockchain para garantir que todo o fluxo seja transparente e auditável.

Em seguida, os dados são divididos em **conjuntos de treino e teste** para validação da acurácia do modelo de classificação. Após a validação, a API retorna os resultados, como métricas de acurácia e detalhes da classificação, para o usuário, com os registros armazenados de forma segura no blockchain.

### 2. Treinamento do modelo de IA

O treinamento da IA acontece automaticamente após a recepção dos dados e a preparação do dataframe. O modelo de **[RandomForest](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)** é ajustado com base nos dados fornecidos, identificando padrões e criando um modelo preditivo. A cada novo conjunto de dados enviado, o modelo é refinado e otimizado para aumentar a precisão das previsões, com todos os ajustes e resultados sendo armazenados no blockchain.

Durante o processo de treinamento:

- A IA aprende com os dados fornecidos, ajustando seus parâmetros com base nas informações contidas no dataframe.
- O modelo é avaliado para garantir que esteja performando adequadamente.
- Caso o desempenho do modelo atenda aos critérios de precisão, ele é utilizado para previsões futuras, com todos os registros de desempenho e previsões sendo armazenados no blockchain.

A integração da IA com a **36'Oracle** permite que os bancos façam previsões precisas e categorizem seus clientes de maneira mais eficiente, garantindo um suporte estratégico para decisões financeiras, com toda a auditoria e rastreamento garantidos pela blockchain.

### 3. Envio de dados sobre o perfil
O envio de dados sobre o perfil do cliente é registrado de forma imutável no blockchain, assegurando que os dados processados possam ser auditados a qualquer momento.

### 4. Categorização e previsão
A categorização e previsão são realizadas dinamicamente pelo modelo. A IA identifica padrões com base nos dados de treino e validação, otimizando o processo com o uso de **RandomForest** para minimizar erros e maximizar a acurácia. Cada resultado gerado é registrado no blockchain, assegurando transparência total.

### 6. Recomendação 
Utilizando a categorização e as previsões geradas pela IA, a API sugere a melhor forma de investimento para cada cliente, com todas as recomendações registradas e auditáveis no blockchain.

## Exemplos de uso 

### Treinamento da IA
Todo o processo de treinamento da IA, incluindo os dados fornecidos e as etapas do modelo, são registrados no blockchain, garantindo que todo o histórico seja imutável e transparente.

### Envio de dados
O envio de dados para treinamento e previsão pode ser auditado por meio dos hashes gerados pela blockchain, garantindo a integridade dos dados.

### Tratamentos de dados
Os dados tratados pela IA podem ser verificados e auditados no blockchain, fornecendo uma garantia de que as informações estão corretas e não foram alteradas.

### Categorizar os clientes
A categorização de clientes feita pela IA pode ser rastreada
