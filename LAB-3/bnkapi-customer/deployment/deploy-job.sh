#!/bin/bash

ibmcloud login -a cloud.ibm.com --apikey $devops_apikey -r eu-gb -g default -o panama -s shdev
cd ./bnkapi-customer 
ibmcloud fn deploy --manifest bnkapi-customer.yml
ibmcloud fn package list




