## Vite Config
Inside defineconfig function add the port is the default port configuration

server: {
    host: '0.0.0.0',
    port: 5173
}

## Create the Container
docker compose up --build -d

## Create
npm init -y
npm i express mongoose mongodb dotenv mongodb
npm i --save-dev typescript @types/node @types/express ts-node-dev

## Storage Permissions

This instructions must be executed on the path where you have the project. We recomend the second one
```shell
sudo chown -R <username> <directory_name>
```