convert:
	node ./lib/convert.js ./cr2/

init:
	brew install dcraw
	brew install imagemagick

clear:
	rm -rf ./cr2/_output/*
	rm -rf ./cr2/*.thumb.jpg

.PHONY: init clear
