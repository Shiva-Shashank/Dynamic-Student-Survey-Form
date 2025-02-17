# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project to the working directory
COPY . .

# Expose port 4200 to the outside world
EXPOSE 4200

# Command to run when starting the container
CMD ["npm", "start"]

