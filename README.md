## Meowbourne

This is a side project for our team internal usage.

### Tech Stack

- Stage 1:

  1. Use `Tensorflow` to build up a transfer learning maching learning model, which aims to predict the breed of a cat picture.

  2. Use Flask to build up several apis to encapsulate the prediction feature.

  3. Use Docker to containerize the service for further deployment usage.

- Stage 2:

  1. Build a `python Scrawler` script that able to fetch all the current available cat information (including name, age, picture, etc.), mainly rely on **RSPCAVIC**.

  2. Integrate the function with `Flask` and enable `redis` to cache the frequently requsted information. Apply `docker-compose` to get the latest redis image.

  3. Front-end setup with `React.js` to demonstrate the data and functionalities.

  4. Dockerize the front-end project, apply `docker-compose`

- Stage 3:

  1. Deploy the repo to AWS EC2 instance.

## Bonus Part:

If have time, can decouple the services into serverless features.

- AWS API Gateway
- lambda
- ElasticCache
- SageMaker

Potential Enhancement:

- Cognito //Auth
- SQS //Message queue
- VPC
