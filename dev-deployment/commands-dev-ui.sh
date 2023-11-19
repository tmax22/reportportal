# login:
# default,1q23e

# set up docker compose with all services except ui
docker compose -p reportportal-dev up -d  analyzer analyzer-train metrics-gatherer uat index api jobs gateway elasticsearch minio postgres rabbitmq

# go into 'services/ui' folder and run
# npm run dev
# go to http://localhost:3000