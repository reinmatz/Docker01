
docker build -t docker .
docker run -it -p 8080:8080  --init docker

curl http://localhost:8080


"scripts": {
  "start": "node server.js"
}