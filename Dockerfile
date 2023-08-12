# 첫 번째 단계: 리액트 프로젝트 빌드
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 두 번째 단계: Nginx를 사용한 정적 파일 서버
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]