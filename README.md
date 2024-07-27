In the current project structure, user authentication is moved out as a separate microservice. The main authentication functionality, such as registration, login, and user management, is located in auth-service.

Main project components

Root structure:

Dockerfile: for building the auth-service Docker image.
docker-compose.yml: for managing auth-service containers and dependencies (e.g. RabbitMQ, PostgreSQL).
.env: file for environment variables (e.g. database configuration).
package.json: file with project dependencies and scripts.
auth-service.js: main file for starting the server.

Subdirectories:

models/: contains database models (e.g. user.js for the user model).
controllers/: contains controllers that manage the application logic (e.g. authController.js for authentication).
routes/: contains routes (e.g. authRoutes.js for authentication routes).
middlewares/: contains middlewares (e.g. errorHandler.js for error handling).
utils/: contains utility functions (e.g. rabbitmq.js for working with RabbitMQ).

Explanation:
The authentication microservice (auth-service) runs independently of other parts of the application.
Docker: Uses Docker to isolate services. auth-service and its dependencies (e.g. PostgreSQL database) run in separate containers.
RabbitMQ: Uses RabbitMQ for communication between services. This allows the main application and the authentication service to communicate with each other asynchronously.


---------------------------------------
Confirming that the microservice is working
To confirm that the authentication microservice is working correctly and interacting with the rest of the system, you can do the following:

Run Docker Compose:

Confirming that the microservice is working
To confirm that the authentication microservice is working correctly and interacting with the rest of the system, you can do the following:

docker-compose up


Check the service logs:

docker-compose logs auth-service
docker-compose logs rabbitmq
docker-compose logs postgres

