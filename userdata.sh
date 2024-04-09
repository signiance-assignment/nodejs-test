#!/bin/bash
apt update -y
apt install git
apt install nodejs npm -y
cd nodejs-test/
npm install
npm install -g pm2
sudo apt install nginx
