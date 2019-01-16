  var fs = require('fs');
  var path = require('path');

  function dirTree(filepath) {
    var info = { name: path.basename(filepath) };
    var invalidFile = (info.name === '.DS_Store');
    var isThumbnail = (info.name.indexOf('_thumbnail') > -1 ||
                       info.name.indexOf('_sm') > -1);

    if (invalidFile || isThumbnail) {
      return; // this leaves an empty array element that we'll clean up on recursion
    }

    info.slug = info.name.toString().toLowerCase()
                    .replace(/\.[^/.]+$/, '') // Strip file extension
                    .replace(/\s+/g, '-')     // Replace spaces with -
                    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
                    .replace(/^-+/, '')       // Trim - from start of text
                    .replace(/-+$/, '');      // Trim - from end of text

    if (fs.lstatSync(filepath).isDirectory()) {
      info.path = filepath.replace('public', '');

      info.children = fs.readdirSync(filepath).map(function(child) {
        return dirTree(filepath + '/' + child);
      });

      // removes empty array elements resulting from early return above
      info.children = info.children.filter(function(e) { return e; });
    } else {
      // thumbnails should exist as a property of the gallery image itself, rather than adjacent neighbors in the collection
      // info.thumb = info.name.replace(/\.[^/.]+$/, '') + '_thumbnail.' + info.name.split('.').pop();
    }

    return info;
  }

  var gallery = dirTree('emotes/100x100');
  fs.writeFileSync('pony.json', JSON.stringify(gallery.children));
