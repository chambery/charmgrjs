var zombie = require("zombie");

zombie.visit("http://localhost:1860/click_me.html", {debug: true}, function(err, browser) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(browser.html());
    browser.clickLink("#click_me", function(err, browser) {
      if (err) {
        console.log(err.message);
      } else {
        console.log(browser.lastResponse);
        browser.dump();
      }
    });
  }
});
