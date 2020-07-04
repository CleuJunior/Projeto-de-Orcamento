// Controlador Despesas

var budgetController = (function(){
   

})()


// Controlador UI

var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value, // des ou rend
                descrip: document.querySelector(DOMStrings.inputDesc).value,
                valor: document.querySelector(DOMStrings.inputValue).value
                

            }
        },

        getDOMStrings: function() {
            return DOMStrings
        }
    }


}) ()

// Controlador APP GLOBAL

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMStrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(ev){
            if(ev.keyCode === 13 || ev.which === 13) ctrlAddItem();
    
        })

    }

    

    var ctrlAddItem = function(){

        var input = UICtrl.getInput()        

    }

    return{
        init: function(){
            console.log("Aplicacao comecou")
            setupEventListeners()
        }
    }

}) (budgetController, UIController)

controller.init()