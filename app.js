var UIController = (function () {

    var DOMstrings = {
        inputType: '.input_type',
        inputDescription: '.input_description',
        inputName: '.input_name',
        inputBtn: '.add__btn',
        EventContainer: '.Eventlist__list',
        container: '.container',
        add__container: '.add__container',
        register_event: '.register_event',

    };
    return {
        displayList: function (obj) {
            var element = DOMstrings.EventContainer;
            for (var i in obj.events) {
                console.log(obj.events[i]);
                var html = '<div class="card"><div class="item clearfix" id="inc-%id%"> <p><strong>Name:</strong> %name%</p><p class="description"><strong>Description:</strong> %description%</p><p ><strong>Type:</strong> %type%</p></div></div>';
                var newHtml = html.replace('%id%', obj.events[i].id);
                var newHtml = newHtml.replace('%name%', obj.events[i].name);
                var newHtml = newHtml.replace('%description%', obj.events[i].Description);
                var newHtml = newHtml.replace('%type%', obj.events[i].type);
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            }

        },
        showItem: function (item) {
            var element = DOMstrings.EventContainer;
            var html = '<div class="card"><div class="item clearfix" id="inc-%id%"> <p><strong>Name:</strong> %name%</p><p class="description"><strong>Description:</strong> %description%</p><p ><strong>Type:</strong> %type%</p></div></div>';
            var newHtml = html.replace('%id%', item.id);
            var newHtml = newHtml.replace('%name%', item.name);
            var newHtml = newHtml.replace('%description%', item.description);
            var newHtml = newHtml.replace('%type%', item.type);
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        getDOMstrings: function () {
            return DOMstrings;
        },
        getInput: function () {
            var length = loadEvents['events'].length
            return {
                id: length + 1,
                name: document.querySelector(DOMstrings.inputName).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                type: document.querySelector(DOMstrings.inputType).value // Will be either inc or exp


            };
        },
        showError: function (input) {
            if (input.name === "") {
                document.querySelector(DOMstrings.inputName).style.border = "1px solid red";

            } else {
                document.querySelector(DOMstrings.inputName).style.border = "1px solid black";

            }
            if (input.description === "") {
                document.querySelector(DOMstrings.inputDescription).style.border = "1px solid red";

            } else {
                document.querySelector(DOMstrings.inputName).style.border = "1px solid black";
            }
            if (input.type === "") {
                document.querySelector(DOMstrings.inputType).style.border = "1px solid red";
            } else {
                document.querySelector(DOMstrings.inputName).style.border = "1px solid black";
            }
        },
        clearFields: function () {
            document.querySelector(DOMstrings.inputName).value = '';
            document.querySelector(DOMstrings.inputDescription).value = '';
            document.querySelector(DOMstrings.inputType).value = ''
        },

    }

})();

var loadEvents = {"events": [
        {"id": "1", "name": "friend's get-together", "Description": "Friends from 10th batch have setup get together", "type": 'Friends'},
        {"id": "2", "name": "Family Outing", "Description": "Family outing with relatives at Pavana Lake", "type": 'Family'},
        {"id": "3", "name": "Social Gathering", "Description": "Social gathering for awareness amongs people to save water", "type": 'Social'},
        {"id": "4", "name": "Local Technology", "Description": "Local technology event organized for the people to help out", "type": 'Technology'},
    ]};
var controller = (function (UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', addButtonForm);

    };
    var ctrlAddItem = function () {
        var input, newItem;
        input = UICtrl.getInput();
        if (input.description !== "" && input.name !== "" && input.type !== "") {
            UICtrl.showItem(input);
            UICtrl.clearFields();
        } else {
            UICtrl.showError(input);
        }
    };
    var addButtonForm = function () {
        var DOM = UICtrl.getDOMstrings();
        var element = DOM.add__container;
        var html = '';
        html += '<input type="text" class="input_name"  id="name" name="name" placeholder="Add Name">';
        html += '<input type="text" class="input_description"  id="description" name="description" placeholder="Add Description">';
        html += '<input type="text" class="input_type"  id="type" name="type" placeholder="Type">';
        html += '<input type="button" class="register_event" value="Add">';
        document.querySelector(element).insertAdjacentHTML('beforeend', html);
        document.querySelector(DOM.register_event).addEventListener('click', ctrlAddItem);
    };
    return {
        init: function () {
            UICtrl.displayList(loadEvents);
            setupEventListeners();
        }

    };

})(UIController);


controller.init();