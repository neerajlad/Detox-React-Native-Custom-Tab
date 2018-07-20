
module.exports = class LoginScreen {
    
    get welcome() {
      return element(by.id("welcome"));
    }
  
    get helloBtn() {
      return element(by.id("hello_button"));
    }
  
    get worldbtn() {
      return element(by.id("world_button"));
    }
    
    get helloWord() {
      return element(by.text("Hello!!!"));
    }
  
    get worldText() {
      return element(by.text("World!!!"));
    }

    visibleOfWelcome() {
       expect(this.welcome).toBeVisible();
    }
  
    tapHelloBtn() {
       this.helloBtn.tap();
       expect(this.helloWord).toBeVisible();
    }
  
    tapWorldBtn() {
      this.worldbtn.tap();
      expect(this.worldText).toBeVisible();
    }


  }

  