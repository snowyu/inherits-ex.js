module.exports =  function (origin) {
  for (var i=1; i < arguments.length; i++) {
    var add = arguments[i];
    // Don't do anything if add isn't an object
    if (!add || !(add instanceof Object)) continue;
    var keys = Object.keys(add);
    var j = keys.length;
    while (j--) {
      origin[keys[j]] = add[keys[j]];
    }
  }
  return origin;
}

