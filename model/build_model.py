import pandas as pd  # type: ignore
import numpy as np  # type: ignore
from sklearn.model_selection import train_test_split  # type: ignore
from sklearn.preprocessing import StandardScaler, LabelEncoder  # type: ignore
from sklearn.ensemble import RandomForestClassifier  # type: ignore
from sklearn.feature_selection import RFE  # type: ignore
from sklearn.metrics import accuracy_score  # type: ignore
import m2cgen as m2c  # type: ignore

# Função para converter JSON para pandas DataFrame
def parse_json_to_dataframe(json_data):
    df = pd.read_json(json_data)

    # Detecta automaticamente as colunas categóricas
    categorical_cols = df.select_dtypes(include=['object']).columns.tolist()

    # Inicializa LabelEncoder para variáveis categóricas
    label_encoders = {}
    
    # Converte variáveis categóricas em rótulos numéricos
    for col in categorical_cols:
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col])
        label_encoders[col] = le  # Armazena o codificador para uma possível transformação inversa

    # Normaliza colunas numéricas
    numerical_cols = df.select_dtypes(include=['int64', 'float64']).columns.tolist()
    if numerical_cols:
        scaler = StandardScaler()
        df[numerical_cols] = scaler.fit_transform(df[numerical_cols])
        print("Colunas normalizadas:", numerical_cols)
    else:
        print("Nenhuma coluna numérica para escalonar.")

    return df, label_encoders

# Treina um modelo dinâmico Random Forest com RFE
def train_dynamic_model(json_data, max_iterations=10):
    df, label_encoders = parse_json_to_dataframe(json_data)

    # Verifica a presença da coluna 'Investor_Type'
    if 'Investor_Type' in df.columns:
        y = df['Investor_Type']
        X = df.drop('Investor_Type', axis=1)
    else:
        # Se não estiver presente, encontra o nome correto
        investor_type_cols = [col for col in df.columns if col.startswith('Investor_Type_')]
        if investor_type_cols:
            y = df[investor_type_cols].values.argmax(axis=1)  # Obtém a classe com o maior valor
            X = df.drop(investor_type_cols, axis=1)
        else:
            print("A coluna 'Investor_Type' não está presente no DataFrame.")
            print("Colunas disponíveis:", df.columns.tolist())
            return None

    # Inicializa o modelo Random Forest
    rf_model = RandomForestClassifier(random_state=42)
    best_accuracy = 0
    iteration = 0

    while iteration < max_iterations:
        # Divide o conjunto de dados em conjuntos de treinamento e teste
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

        # Inicializa o RFE com o modelo e o número de features desejadas
        rfe = RFE(estimator=rf_model, n_features_to_select=min(5, X.shape[1]))

        # Ajusta o RFE ao conjunto de treinamento
        rfe.fit(X_train, y_train)

        # Seleciona as features mais importantes
        X_train_rfe = rfe.transform(X_train)
        X_test_rfe = rfe.transform(X_test)

        # Treina o modelo Random Forest com as features selecionadas
        rf_model.fit(X_train_rfe, y_train)

        # Avaliação do modelo
        y_pred = rf_model.predict(X_test_rfe)
        accuracy = accuracy_score(y_test, y_pred)

        print(f"Iteração {iteration + 1}: Acurácia = {accuracy:.4f}")

        # Verifica se a nova acurácia é melhor do que a anterior
        if accuracy > best_accuracy:
            best_accuracy = accuracy
            selected_features = X.columns[rfe.support_]
            print("Melhores features até agora:", selected_features.tolist())

        # Se a acurácia não melhorar, interrompa o loop
        if accuracy > .7:
            break

        iteration += 1

    # Gerando o código em Python para o modelo treinado
    python_code = m2c.export_to_python(rf_model)

    # Escrevendo o modelo em um arquivo 'model.py' no diretório pai
    with open("../model.py", "w") as file:
        file.write(python_code)
        file.write(f"\ncolumns = {X.columns.tolist()}\n")
        file.write(f"classes = {np.unique(y).tolist()}\n")

    print("\nModelo convertido e salvo em 'model.py' com sucesso!\n")

    return {"accuracy": best_accuracy, "selected_features": selected_features.tolist()}

# Chama a função de treinamento com o caminho para o arquivo JSON
accuracy_result = train_dynamic_model('synthetic_data.json')