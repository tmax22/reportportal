docker compose -f docker-compose-dev.yml -p reportportal-dev up

# run only ui service
docker compose -f docker-compose-dev.yml -p reportportal-dev up ui --build

# debug ui container
docker compose -f docker-compose-dev.yml -p reportportal-dev run ui bash