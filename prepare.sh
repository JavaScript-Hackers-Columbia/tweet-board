#!/bin/bash

error () {
	echo "Oh snap, Bower failed at installing...  Check your logs!!"
	exit 1
}

success () {
	cd ./public/lib/bootstrap
	npm install
	make
	mv ./docs/assets .

	echo
	echo
	echo "Setup complete!  Bootstrap's ready!"
	exit 0
}

bower install || error

success