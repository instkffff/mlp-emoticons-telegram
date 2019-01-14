# PNG2GIF: Convert PNG images to GIF



The PNG image file format is vastly superior to GIF, supporting many more colours and better transparency. IE6, however, doesn't support PNG transparency without the use of a browser specific hack. Therefore the easiest way to display partly transparent images across multiple browser without the use of a hack is to use a GIF image instead.

The excellent set of free and widely used silk icons from FAMFAMFAM come as a set of over 700 PNG images, and I frequently found myself converting a few icons from PNG to GIF for a web project. Converting more than one or two images at a time quickly gets boring, so I created a Python command line utility, based on the code at Nadia Alramli's blog, to perform the conversion automatically.


* Creating GIF files from all the PNG images in the current directory becomes as simple as:

> python png2gif.py *.png



* If you want to create the GIF images, and delete the PNG images then:

> python png2gif.py -r *.png


* And if you'd like to output the GIF images to a different directory then:

> python png2gif.py -o gifImages/ *.png


* To view a full list of supported options you can run png2gif with -h, which shows:

> Usage: png2gif [OPTIONS] &lt;files&gt;

### Convert PNG images to GIF format

* Options:

  ``` -h, --help            show this help message and exit
  
  -o OUTPUTDIR, --outputdir=OUTPUTDIR
  
  Set the output directory in which to put the GIF
  
  images. Defaults to the current directory
  
  -t THRESHOLD, --threshold=THRESHOLD
  
  Set the transparency threshold. Defaults to 0
  
  -r, --replace         Delete the PNG files after converting them to GIF
  
  ... -v, --verbose         Verbose output




http://www.coderholic.com/png2gif/