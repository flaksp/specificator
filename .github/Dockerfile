FROM node:8.15.1-alpine

COPY ./lint.sh /lint.sh
COPY ./test.sh /test.sh

RUN chmod +x /lint.sh
RUN chmod +x /test.sh

RUN apk add make
