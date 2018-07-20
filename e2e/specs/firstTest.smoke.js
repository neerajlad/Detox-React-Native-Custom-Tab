

var LoginScreen = require("../pages/firstPage.CCC.js");
var loginScreen= new LoginScreen();

describe('User is able to Login or not?', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

    it('should have welcome screen', async () => {
      await loginScreen.visibleOfWelcome();
    });
  
    it('should show hello screen after tap', async () => {
      await loginScreen.tapHelloBtn();
    });

    it('should show world screen after tap', async () => {
      await loginScreen.tapWorldBtn();
    
    });
  })

  describe('User is not able to Login or not?', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
      it('should have welcome screen', async () => {
        await loginScreen.visibleOfWelcome();
      });
    
      it('should show hello screen after tap', async () => {
        await loginScreen.tapHelloBtn();
      });
  
      it('should show world screen after tap', async () => {
        await loginScreen.tapWorldBtn();
      
      });
    })