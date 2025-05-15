# Usa a imagem do NGINX
FROM nginx:alpine

# Copia os arquivos do seu site para a pasta pública do NGINX
COPY . /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicia o NGINX em primeiro plano
CMD ["nginx", "-g", "daemon off;"]