var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: function(b) {
            console.log(add(b))
        }
    }
})();

var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };

}());

var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function() {
        
        var input = UICtrl.getInput();
        console.log(input);
    };

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem) 

    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });
    

}(budgetController, UIController));