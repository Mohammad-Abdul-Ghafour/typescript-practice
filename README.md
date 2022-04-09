# Typescript Practice

**`TypeScript`** is a programming language that can be use as alternative to **`JavaScript`** so we can say it is a **`flavor`** of **`JavaScript`**.

And Actually known as **`superset`** of JavaScript meaning that it's basically extends the language with new features and syntax.

## TypeScript Features

* **`Strict Types`** : That allow us to use Strict variables Types ( e.g if we declared a variable with type number we can't change that variable type to another data type ).

* **`Modern Features`** : TS supports modern features like arrow functions, let, const, ... etc and because TS is compiled into JS it allow us to use those features even if they doesn't fully supported in browsers.

* **`Extra Features`** : Like generics, interfaces, tuples ... etc.

## Installing TypeScript Globally

To install TS we need Node.js installed on our device then we can install TS using Node Package Manager (npm).

> npm install -g typescript

## Working With TS

### Compiling TS to JS

TS is the same as JS so we create new file with extension of *`.ts`* instead of *`.js`* and after we write our code as we said before we have to compile TS into JS because browser does not understands TS, and that is very simple, open your terminal inside the project directory and just run the following command.

> tsc the-file-name.ts the-file-name.js

**`tsc`** : It's a command to compile TS

**`the-file-name.ts`** : It's the name of your TS file you want to compile into JS

**`the-file-name.js`** : It's the name of the JS file you want to put your translated TS in.

We can just simply type the name of the TS file and it will automatically create for us JS file with the same TS file name if the file does not exist.

> tsc the-file-name.ts

Here every time we want to write TS or edit we gonna rerun the **`tsc`** command, but we can make it automatically recompile just by adding *`-w`* to the command to tell TS to watch over this file every time we made a change and save it's gonna recompile that automatically.

> tsc the-file-name.ts -w

---------------------------------------------------

### Define The Type Of Variables

In TS we can define the type of variable so we make it strict to the type of data, and how we do that ?

By default TS takes the initial type of the value of the variable as the strict type for example

```typescript
let x = 30; // TS will take x as number data type
let y = "hello"; // TS will take y as string data type
let z = false; // TS will take z as boolean data type
```

but what if we have to define a variable without giving it a value like a function parameter ?

```typescript
const circ = (diameter: number) => { // Simply here we tells TS that diameter data type is number
  return diameter * Math.PI;
};

console.log(circ(7.5));
```

here we tells TS that **`diameter`** is strict to **`number`** type of data.

---------------------------------------------------

### Arrays Data Type

**`Arrays`** in TS strict to its initial values so if we defined an **`Array`** with Strings we can't add deferent data type later on e.g :

```typescript
let names = ["Mohammad","Ahmad"]; // Array with strings as initial value

names.push("Hadi"); // here we can add string to the array

//names.push(33); // but adding number data type to 
// names[0] = 3; // a string array is not possible
```

But what if we need a mixed **`Array`** ?, what we can do is give the **`Array`** a mixed data type as its initial value and then we can push and change the values to mixed values.

```typescript
let mixed = ["Mohammad",10] // Here we defined an array with mixed data type so we can add numbers and strings to it.

mixed.push("Hadi");
mixed.push(15);
```

And if we are not sure of the data type we gonna use in the array we simply define the array with empty array.

```typescript
let array = []

array.push("Hadi");
array.push(5);
array.push(false);
```

And last thing that we can't change the type of array it self for example

```typescript
let array = []
array = ""
```

here we can't change the variable *`array`* from array type to string type.

---------------------------------------------------

### Object Data Type

**`Objects`** in TS are the same if we declared a property to a specific type then we can't change that type.

```typescript
let person = {
  name : "Mohammad",
  age : 29,
};

person.name = "Ahmad";
person.age = 30;
// person.name = 10;
// person.age = '30';
```

here in the person object we declared name as a string and age as a number so we can't change their type late on.

Like wise we can't add new properties to the object.

```typescript
let person = {
  name : "Mohammad",
  age : 29,
};

// person.skills = []; // We can't add new property to the object in TS
```

---------------------------------------------------

### Explicit Type Without Initial Value

1. **`Variables`**

    Sometimes we need to give a variable a type without giving it an initial value.

    We can do that by explicitly giving the variable a type, how we can do that ?

    ```typescript
    let name : string;
    let age : number;
    let islogedin : boolean;
    // Now we gives those variables types and in the future they well not accept a deferent types
    ```

2. **`Arrays`**

    Also in arrays we need to declare an array without giving it a values and same as variables we can give it a type before initiate the array, how ?

    ```typescript
    let firstArray : string[];
    let secondArray : number[];
    ```

    But here we have a note that we can't use push method on the array, why ? simple because at this point we just said that's the type of the array but we didn't initiate it, so what we can do is to give it an initial value as empty array.

    **`NOTE`** : If you used the push method on array before initiate it will not give you an error in the text editor but in the inspect it will.

    ```typescript
    let firstArray : string[] = [];
    let secondArray : number[] = [];
    // Now we can use the push method
    secondArray.push(30);
    ```

3. **`Objects`**

    So how we can explicitly declare a variable as an object ? simply we can do as the following

    ```typescript
    let person : object;
    person = {
      name:"Mohammad",
      age:29,
    }
    ```

    **`NOTE`** : Here we can declare the object persons as an array because the array is kind of an object

    ```typescript
    let person : object;
    person = []
    // This would work
    ```

    So if we need to be more specific when declaring an object we can do that.

    ```typescript
    let person : {
      name:string,
      age:number,
      islogedin:boolean,
    };
    person = {name:"Mohammad",age:29,islogedin:true}
    ```

4. **`Union Types`**

    Sometimes we need to give a **`variable`** multiple types, how to do that ?

    ```typescript
    let name : string | number;
    let age : number | string | boolean;
    let logedin : boolean | number;
    // Now we gives those variables multiple types
    ```

    We call that **`Union Types`**

    And for sure we can give the **`arrays`** **`Union Types`** as the **`variable`**, the only deference that the types should be in **`tuple`** and in front of it a square brackets.

    ```typescript
    let firstArray : (string | number)[] = [];
    let secondArray : (number | boolean)[] = [];
    ```
5. **`Dynamic (any) Types`**

Sometimes in a **`rare situation`** you may need to declare a variable or array even an object with dynamic type where the value type can be any type, although that is not recommended but yes we can do that using **`any`** to declare the type e.g :

```typescript
// Variables
let name : any; // Here we tell typescript that this variable could be any type in the future and can be changed
name = "Mohammad";
name = 25;
name = true;

// Arrays
let array : any[] = []; // Here we tell typescript that this array could contain any type (string,number,boolean)
array.push("Mohammad");
array.push(29);
array.push(false);

// Objects
let object : {name:any,age:any}; // Here we tell typescript that this object attributes can be any type
object = {name:"Mohammad",age:29};
object = {name:29,age:"Mohammad"};
```

But as we said thats not recommended because TS found explicitly give each variable a type so you get code with lesser errors.

---------------------------------------------------

## NOTES

* Browsers by default do not understands TS so we have to compile it to JS ( most cases it's very easy to compile it down to JS and it comes with a load of extra features ).

* TypeScript forces us to write cleaner and better code with less error grown.

* TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker.

* After we compiled the TS file if we opened the TS and JS file at the same time it might gave you an error line in the TS file, don't worry that maybe because of a conflict between the tow file but if you closed the JS file the errors should be gone.
