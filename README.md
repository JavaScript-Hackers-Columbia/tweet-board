# Tweet Board

You will need [a self signed key](http://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server) in the folder above your repo directory for this to work out of the box.  

HTTPS is enabled for Twitter oAuth.

# Bower!!

This project uses [bower](https://github.com/bower/bower).  Unfortunately bootstrap when using bower isn't the actual files you need.  Run `prepare.sh`.  This will install Bootstrap's dependancies and move the assets to the correct location.