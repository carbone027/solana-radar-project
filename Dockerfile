# Etapa para criar a imagem final usando Cartesi
FROM --platform=linux/riscv64 cartesi/python:3.10-slim-jammy

# Variável para a versão do Machine Emulator Tools
ARG MACHINE_EMULATOR_TOOLS_VERSION=0.14.1
ADD https://github.com/cartesi/machine-emulator-tools/releases/download/v${MACHINE_EMULATOR_TOOLS_VERSION}/machine-emulator-tools-v${MACHINE_EMULATOR_TOOLS_VERSION}.deb /
RUN dpkg -i /machine-emulator-tools-v${MACHINE_EMULATOR_TOOLS_VERSION}.deb \
  && rm /machine-emulator-tools-v${MACHINE_EMULATOR_TOOLS_VERSION}.deb

# Configurações e labels para Cartesi Rollups
LABEL io.cartesi.rollups.sdk_version=0.6.0
LABEL io.cartesi.rollups.ram_size=128Mi
# Configurações do ambiente
ARG DEBIAN_FRONTEND=noninteractive
RUN set -e && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    busybox-static=1:1.30.1-7ubuntu3 \
    build-essential \
    gfortran \
    libblas-dev \
    liblapack-dev && \
    rm -rf /var/lib/apt/lists/* /var/log/* /var/cache/* && \
    useradd --create-home --user-group dapp

ENV PATH="/opt/cartesi/bin:${PATH}"

# Diretório de trabalho da aplicação
WORKDIR /opt/cartesi/dapp

# Copia o requirements.txt para a imagem
COPY ./requirements.txt .

# Instala as dependências dentro da imagem final do Cartesi
RUN set -e && \
    pip install -r requirements.txt --no-cache && \
    find /usr/local/lib -type d -name __pycache__ -exec rm -r {} +

# Copia o dapp.py e o model.py
COPY ./dapp.py .
COPY ./model/model.py .

# Configura a URL do Rollup HTTP Server
ENV ROLLUP_HTTP_SERVER_URL="http://127.0.0.1:5004"

# Comandos de entrada para inicializar a aplicação
ENTRYPOINT ["rollup-init"]
CMD ["python3", "dapp.py"]
