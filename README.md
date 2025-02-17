# Dynamic-Student-Survey-Form

This project is a Java-based Student Survey Web Application that collects feedback from students about their university experience. Built using JSP and Tomcat, the application offers a user-friendly interface for submitting surveys and is containerized using Docker for seamless deployment. The project leverages a complete CI/CD pipeline with Jenkins, automating the process of building, testing, and deploying the application on a Kubernetes cluster managed by Rancher.

The Jenkins pipeline builds the application into a .war file, creates and pushes a Docker image to Docker Hub, and deploys it using kubectl. The use of containerization and orchestration ensures scalability, reliability, and consistency across environments. This project demonstrates the integration of modern DevOps tools for deploying Java web applications efficiently.
