#!/bin/bash

ibmcloud login -a cloud.ibm.com --apikey $devops_apikey -r eu-gb -g default -o panama -s shdev
cd ./bnkapi-loanreq 
ibmcloud fn deploy --manifest bnkapi-loanreq.yml
ibmcloud fn package list
ibmcloud fn action list



