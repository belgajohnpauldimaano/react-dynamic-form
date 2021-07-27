Dynamic Form Rendering Project

## To run the application

Please change the .env.example to .env

```
yarn start
```

#### To run the application in local development using dockerfile

```
docker-compose -f ./docker-compose.dev.yml build
docker-compose -f ./docker-compose.dev.yml up
```

#### To run the application in production using dockerfile

```
docker-compose -f ./docker-compose.prod.yml build
docker-compose -f ./docker-compose.prod.yml up
```
