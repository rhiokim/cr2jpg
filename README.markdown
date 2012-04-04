### intro
cr2jpg is experimental script for raw image data(crw, cr1, cr2 ..) covert to other format(jpg, tif, png, bmp, gif. etc)

### requirement
* dcraw

```
$ brew install dcraw
```

* ImageMagicK

Also ImageMagicK require XCode 4.3.x on mac

```
$ brew install imagemagick
```

### usage

```
$ node cr2jpg.js cr2-file-dir
$ node cr2jpg.js ../cr2/                                                                                      
```

### references
* http://www.cybercom.net/~dcoffin/dcraw/
* http://en.wikipedia.org/wiki/Dcraw
* http://www.cybercom.net/~dcoffin/dcraw/dcraw.1.html

* http://www.camerahacker.com/Digital/dcraw_by_example.shtml

* http://www.imagemagick.org/
