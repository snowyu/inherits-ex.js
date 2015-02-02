var createFunction = require('./createFunction');

//create a contructor function dynamically.
module.exports = function(name, body) {
  if (body == null) body = "return " + name + ".__super__.constructor.apply(this, arguments);"
  return createFunction(name, body);
}
