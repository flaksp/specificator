FROM node:8.15.1-alpine

COPY ./lint.sh /lint.sh
COPY ./tests.sh /tests.sh

RUN chmod +x /lint.sh
RUN chmod +x /tests.sh

RUN apk add make
