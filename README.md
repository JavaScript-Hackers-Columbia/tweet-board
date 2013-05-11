# Tweet Board

You will need [a self signed key](http://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server) in the folder above your repo directory for this to work out of the box.  

HTTPS is enabled for Twitter oAuth.

# Bower!!

This project uses [bower](https://github.com/bower/bower).  Unfortunately bootstrap when using bower isn't the actual files you need.  You will have to go into the /public/lib/bootstrap folder (after running `bower install`).  You'll need to run `npm install` and `make` there.  Then copy the `/docs/assets` to `/`.  After that bootstrap will be ready to be used in the repo.