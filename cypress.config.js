const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true, //for captrue the video
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false //for intgration 
  },
});
