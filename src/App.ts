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

var burger: string = 'hamburger', //string
    calories: number = 300, //Numeric
    tasty: boolean = true // Boolean

    /**
     * The function expects a string and an interger.
     * It doesn't return anything so the type of the function is void.
     */

    function speak(food: string, energy: number): void {   
        console.log(`Our ${food} has ${energy} calories`)
    }

    speak(burger, calories)

    /**
      * Interfaces are used to type-check 
      */

      interface Food {
          name: string;
          calories: number;
      }

      /**
       * We tell our function to expect an object that fullfills the Food interface
       * This wayy we know what properties we need 
       */

       function speakv2(food: Food): void {
           console.log(`Our ${food.name} has ${food.calories} `)
       }

       /**
        * We define an object that fulfills the Food interface 
        */

        let ice_cream = {
            name: `ice cream`,
            calories: 200
        }

        speakv2(ice_cream)
    
        /**
         * Classes 
         * Used for large scale apps with object oriented style of programing
         * It is similar to C# and Java
         */

         /**
          * Simple typescript class
          */

          class Menu {
              // Properties
              // By default it is public but can be also private or protected
              items: Array<string> // An array of string
              pages: number;  // A number

              constructor(item_list: Array<string>, total_pages: number) {
                this.items = item_list;
                this.pages = total_pages
              }

              // Methods
              list(): void {
                  console.log(`Our menu for today: `)
                  for(let i =0; i < this.items.length; i++){
                      console.log(this.items[i])
                  }
              }
          }

        /**
        * Create a new instance of the Menu class
        */
        let sundayMeny = new Menu(["pancakes","waffles","orange juice"], 1);
        
        /**
         * Class Inheritance
         */

         class HappyMeal extends Menu {
             // Properties are inherited

             // A new constructor 
             constructor(item_list: Array<string>, total_pages: number) {
                super(item_list, total_pages)
             }

            // Just like the properties, methods are inherited from the parent.
            // However, we want to override the list() function so we redefine it.
            list(): void{
                console.log("Our special menu for children:");
                for(var i=0; i<this.items.length; i++) {
                    console.log(this.items[i]);
                }
            }
         }

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

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

 function genericFunc<T>(argument: T): T[] {
     var arrayOfT: T[] = []; // Create an array of type T.
     arrayOfT.push(argument) // Push, now arrayOfT = [argument]
     return arrayOfT;
 }

 let arrayFromString = genericFunc<string>('beep');
 console.log(`${arrayFromString[0]}`); // Beep
 console.log(typeof arrayFromString[0])  // String
          
 let arrayFromNumber = genericFunc<number>(4);
 console.log(`${arrayFromNumber[0]}`) // 4
 console.log(typeof arrayFromNumber[0]) // number 



/**
 * Modules is a way to split your code to reusable components. 
 * We are using typescript with require.js to enable external modules.
 */


 /**
  * exporter.ts
  */
 let sayHi = function(): void {
     console.log(`Hi!`);
 }

// export sayHi; 

/**
 * importer.ts
 */
// import sayHi = require('./exporter);
sayHi()

/**
 * Extra parameted to tell TS that we are building modules for require.js
 *      $ tsc --module amd *.ts
 */

/**
 * Used for libraries for regular javascript. We need to declare the file to make the 
 * Library compatabile for typescript. 
 * A declaration file has the extension .d.ts 
 */

        




    