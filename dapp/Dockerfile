# Use uma imagem base oficial do Python
FROM python:3.10-slim

# Defina variáveis de ambiente para evitar problemas de entrada durante a instalação
ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED=1

# Atualize o sistema e instale dependências básicas
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    ninja-build \
    patchelf \
    python3-dev \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Atualize pip para a versão mais recente
RUN pip install --upgrade pip setuptools wheel

# Crie um diretório de trabalho
WORKDIR /app

# Copie os arquivos requirements.txt para dentro do container
COPY requirements.txt /app/

# Instale as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie o restante do código do aplicativo para o contêiner
COPY . /app

# Comando para iniciar a aplicação
CMD ["python", "seu_script.py"]
