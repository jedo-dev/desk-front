FROM nginx:1.21.1-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY  ./dist /usr/share/nginx/html
# COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]