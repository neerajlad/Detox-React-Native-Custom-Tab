
module.exports = class control{


    // constructor(locatorType,locatorValue){
    //     loginPO
    //     this.locatorType = locatorType;
    //     this.locatorValue = locatorValue;
    // }

    getControl(){
        
        var object;
        switch(locatorType) {
            case id:
                object = element(by.id(locatorValue));
                break;
            case text:
            object = element(by.text(locatorValue));
                break;
        }
        return object;
    }
    
}