/**
 * Static Typing / Data Types
 * Commonly used data types.
 * - Number
 * - String
 * - Boolean
 * - Any
 * - Array
 * - Void
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var burger = 'hamburger', //string
calories = 300, //Numeric
tasty = true; // Boolean
/**
 * The function expects a string and an interger.
 * It doesn't return anything so the type of the function is void.
 */
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories");
}
speak(burger, calories);
/**
 * We tell our function to expect an object that fullfills the Food interface
 * This wayy we know what properties we need
 */
function speakv2(food) {
    console.log("Our " + food.name + " has " + food.calories + " ");
}
/**
 * We define an object that fulfills the Food interface
 */
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speakv2(ice_cream);
/**
 * Classes
 * Used for large scale apps with object oriented style of programing
 * It is similar to C# and Java
 */
/**
 * Simple typescript class
 */
var Menu = (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today: ");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
/**
* Create a new instance of the Menu class
*/
var sundayMeny = new Menu(["pancakes", "waffles", "orange juice"], 1);
/**
 * Class Inheritance
 */
var HappyMeal = (function (_super) {
    __extends(HappyMeal, _super);
    // Properties are inherited
    // A new constructor 
    function HappyMeal(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
// This time the log message will begin with the special introduction.
menu_for_children.list();
/**
 * Generics are templates for functions to allow different argument types.
 */
/**
 * The <T> after the function says that it's a generic type
 * When we call the function, every instance of T will be replaced with the provided types
 */
// Receives one argument of type T
// Returns array of type T
function genericFunc(argument) {
    var arrayOfT = []; // Create an array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument]
    return arrayOfT;
}
var arrayFromString = genericFunc('beep');
console.log("" + arrayFromString[0]); // Beep
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(4);
console.log("" + arrayFromNumber[0]); // 4
console.log(typeof arrayFromNumber[0]); // number 
/**
 * Modules is a way to split your code to reusable components.
 * We are using typescript with require.js to enable external modules.
 */
/**
 * exporter.ts
 */
var sayHi = function () {
    console.log("Hi!");
};
// export sayHi; 
/**
 * importer.ts
 */
// import sayHi = require('./exporter);
sayHi();
/**
 * Extra parameted to tell TS that we are building modules for require.js
 *      $ tsc --module amd *.ts
 */
/**
 * Used for libraries for regular javascript. We need to declare the file to make the
 * Library compatabile for typescript.
 * A declaration file has the extension .d.ts
 */
