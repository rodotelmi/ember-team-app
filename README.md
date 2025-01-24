# Ember.js: Simple Team Management

This is a full-stack Team Management Application with a **backend built using IBM LoopBack 3** and a **frontend built using Ember.js v3.28**. The application allows users to manage teams and their members, with features to add, edit, and delete teams and members.

---

## Features

### Frontend (Ember.js v3.28)
1. **Homepage**:
   - Displays a list of all teams with their details (name and description).
2. **Team Details Page**:
   - Shows detailed information about a team (name and description).
   - Lists all members belonging to the team.
3. **Add/Edit Team Page**:
   - Allows users to add or edit a team with the following fields:
     - Team Name (required).
     - Team Description.
4. **Add/Edit Team Member Page**:
   - Allows users to add or edit team members under a specific team with the following fields:
     - Member Name (required).
     - Member Role (e.g., Developer, Designer, Manager).
5. **Delete Functionality**:
   - Users can delete teams and members.

---

## Getting Started

## Docker Setup

The application is configured to run in a Docker container, making it easy to set up and manage dependencies.



### Dockerfile

The `Dockerfile` sets up the Node.js environment, installs dependencies, and starts the LoopBack application.

```api.Dockerfile
FROM node:22

ARG NODE_ENV
ENV NODE_ENV dev

ARG USERNAME=node
RUN mkdir -p /home/$USERNAME/app
USER $USERNAME    
WORKDIR /home/$USERNAME/app
```

---

### docker-compose.yml

The `docker-compose.yml` file defines the services required to run the application. In this case, it only includes the LoopBack API service.

```yaml
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    image: botdistrikt_web
    container_name: botdistrikt_web
    tty: true
    ports:
      - "4200:4200"
    command: sleep infinity
    volumes:
      - /home/alesha/botdistrikt:/home/node/app
    networks:
      - botdistrikt_dev
    restart: unless-stopped

  api:
    build:
      context: .
      dockerfile: api.Dockerfile
    image: botdistrikt_api
    container_name: botdistrikt_api
    volumes:
      - /home/alesha/botdistrikt/bdapi:/home/node/app
    tty: true
    ports:
      - "3000:3000"
    command: sleep infinity
    networks:
      - botdistrikt_dev
    restart: unless-stopped
networks:
  botdistrikt_dev:
    external: true
```

### Installation
1. Clone the repository:
   ```bash
   git clone THIS_REPO
   ```
2. Edit volume on the web service in docker compose according to your folder structure
   
  ```bash
  docker-compose up -d --build
  docker-compose exec web bash
  npm install
  ember serve
  ```
 - **`docker-compose up -d --build`**: Builds and starts the Docker containers in detached mode (running in the background).
 - **`docker-compose exec api bash`**: Opens an interactive bash shell inside the running `web` container.
 - **`npm install`**: Installs all Node.js dependencies listed in `package.json` inside the container.
 - **`ember serve`**: Starts the Ember application (assuming the entry point is defined in the current directory).
   
The API will be running at `http://localhost:4200`.

---

## Deployment

When deploying the application, you can configure the **API endpoint** for the frontend by setting the `API_HOST` environment variable. This allows the frontend to communicate with the backend API hosted at a different URL (e.g., in production).

### Steps to Set `API_HOST`:
1. Set the `API_HOST` environment variable to the backend API URL (e.g., `https://api.example.com`).
2. In the Ember.js frontend, use `API_HOST` to configure the API endpoint.

Example:
```bash
export API_HOST=https://api.example.com
```

### Example for Docker Deployment:
Add the `API_HOST` environment variable to the `docker-compose.yml` file:
```yaml

services:
  web:
    environment:
      - API_HOST=https://api.example.com
  
```
### Screenshot

![image](https://github.com/user-attachments/assets/597cae79-73e4-4822-bb32-1774aea598e7)

![image](https://github.com/user-attachments/assets/ce7b303e-9acd-4ee3-8609-63e251ef4b04)

![image](https://github.com/user-attachments/assets/ce86362a-abf8-4862-af5e-afe90d4930e5)




