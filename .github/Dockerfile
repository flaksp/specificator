FROM node:8.16.0-alpine

COPY ./markdownlint.sh /markdownlint.sh
COPY ./publish-to-npm.sh /publish-to-npm.sh
COPY ./tslint.sh /tslint.sh

RUN chmod +x /markdownlint.sh
RUN chmod +x /publish-to-npm.sh
RUN chmod +x /tslint.sh

RUN apk update --no-cache && apk upgrade --no-cache && apk add --no-cache --upgrade make git
