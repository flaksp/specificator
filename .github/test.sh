#!/bin/sh

make npm-dependencies-installation

if [ $GITHUB_REF = "master" ]; then
    make test-with-coveralls-report
else
    make test
fi

