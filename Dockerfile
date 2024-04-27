FROM ubuntu
WORKDIR /app
# Install nodejs
RUN apt-get update \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get upgrade -y \
    && apt-get install -y nodejs
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["node", "./bin/www"]