FROM ubuntu
RUN apt-get update
RUN apt-get install node nginx -y
COPY .  .
RUN npm run build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]