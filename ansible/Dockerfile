FROM cytopia/ansible:2.11

USER root

RUN apk update && apk add --no-cache \
    docker-cli \
    nodejs \
    npm \
    git \
    bash \
    curl

RUN npm install -g @angular/cli

RUN wget -O /usr/local/bin/argocd  https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64 \
    && chmod +x /usr/local/bin/argocd
