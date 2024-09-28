#!/bin/bash

# Set variables
DOCKERHUB_USERNAME="afumchris"
IMAGE_NAME="frontend-react-js"
TAG="latest"

# Build the Docker image
docker build -t $DOCKERHUB_USERNAME/$IMAGE_NAME:$TAG .

# Log in to DockerHub
echo "Logging in to DockerHub..."
docker login

# Push the image to DockerHub
echo "Pushing image to DockerHub..."
docker push $DOCKERHUB_USERNAME/$IMAGE_NAME:$TAG

echo "Image pushed successfully!"