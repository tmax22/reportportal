docker compose -p reportportal-dev up -d

# run only ui service
docker compose -p reportportal-dev up ui --build --no-deps --force-recreate

# debug ui container
docker compose -p reportportal-dev run ui bash