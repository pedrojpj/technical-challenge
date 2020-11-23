## Technical Challenge

### Prerequisites

To be able to execute the project you need the following requirements:

- Node 12.18 or superior
- NPM 6.14 or superior
- Yarn 1.22.4 or superior

### Installation

To be able to install the project for the first time it is necessary to execute the following commands:

    yarn

And then the following command:

    yarn build

### Execution

To be able to run the project in developer mode, execute the command:

    yarn start

### Execution with Docker

To build the image of Docker:

```
 docker build . -f Dockerfile.web -t tech-challenge
```

To run the image:

```
 docker run --publish 3000:3000 --detach --name tech-challenge tech-challenge:latest
```
