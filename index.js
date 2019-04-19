function helloWorld() {
  return `Hello World`;
}

function helloHuman(name) {
  return `Hello ${name}`;
}

module.exports = { hello: helloWorld, hello2: helloHuman };
