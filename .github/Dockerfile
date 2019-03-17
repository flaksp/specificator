FROM node:8.15.1-alpine

COPY ./lint.sh /lint.sh
COPY ./test.sh /test.sh
COPY ./test-with-coveralls-report.sh /test-with-coveralls-report.sh
COPY ./publish-to-npm.sh /publish-to-npm.sh

RUN chmod +x /lint.sh
RUN chmod +x /test.sh
RUN chmod +x /test-with-coveralls-report.sh
RUN chmod +x /publish-to-npm.sh

RUN apk add --no-cache make git
