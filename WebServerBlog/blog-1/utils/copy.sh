#!/bin/sh

cd /Users/liguangyang/Desktop/Node-Study/WebServerBlog/blog-1/logs/
cp access.log $(date +%Y-%m-%d-%H).access.log 
echo "" > access.log