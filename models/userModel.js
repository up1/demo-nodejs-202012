const User = function (id, name) {
  this.id = id;
  this.name = name;
};

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const user = new User(1, "name");

module.exports = User;
