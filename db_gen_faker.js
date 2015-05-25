module.exports = function() {
  var data = { users: [] }
  var faker = require("faker");
  // Create 1000 users 
  for (var i = 0; i < 8; i++) {
    data.users.push({ id: i, name: faker.name.findName() })
  }
  return data
}
