-----------Project Overview--------------

The project demonstrates a complete DevOps workflow:

1.Build a static calculator web app using HTML + JavaScript.
2.Containerized the app using Docker.
3.Pushed the Docker image to Docker Hub.
4.Automatically deployed the app to an EC2 instance on Amazon Web Services.
5.Used GitHub Actions for CI/CD.
When the code is pushed to the main branch, the app is automatically built, pushed, and deployed.

-----------Architecture Overview------------

<img width="1024" height="512" alt="ChatGPT Image Feb 18, 2026, 10_04_36 PM" src="https://github.com/user-attachments/assets/5bad57b4-1c70-4eb0-b476-c7f4e92c26b1" />

------------Docker Configuration-------------

The application runs inside an Nginx container.
Dockerfile:
1.Uses nginx:alpine image
2.Removes default nginx files
3.Copies calculator app files
4.Exposes port 80

The container runs on: http://34.246.176.89

----------- CI/CD Pipeline (GitHub Actions)-----------

The workflow automatically:
1.Checks out the code
2.Logs into Docker Hub
3.Builds Docker image
4.Pushes image to Docker Hub
5.SSH into EC2
6.Pulls latest image
7.Stops old container
8.Runs updated container


