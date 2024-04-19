Steps:
1. make a Dockerfile & put instructions
2. make docker image of your of your application
  - docker build -t {imagename}
3. See all docker images
  - docker images | docker desktop
4. Run the docker application
  - docker run -it -d -p 3000:3000 <imagename> (it - interactive shell, d- detach mode, p - port mapping)
5. See all running container in your system
  - docker ps (shows running containers only)
  - docker ps -a (shows stop containers also)
  - docker desktop
6. Push to dockerhub
  - docker login
  - create new repository in docker hub
  - Rename your local image name to docker hub repository name
      - docker tag {imagename} {reponame}
      - eg : docker tag todoapp ankan/todoapp
  - docker push ankan/todoapp
7. Stop container  
  - docker stop {containerId}
8. delete container
  - docker rm {containerId}
9. Pull image from dockerhub
  - docker pull {name}
10. delete a image
  - docker rmi -f {ImageId} (f - force)
