## js
- highly abstracted programming language

- #### high abstraction
    - hiding the implementation details
        - user does not know what is happening inside the ATM
    - showing only the functionality to the users
        - he is simply getting the money by pushing buttons

    - don't have to handle resource management management and memory allocation
    - don't have to handle garbage collection
    - reduces details so that developers can focus on logic better
    - improve understanding as well as maintainability of the code


- #### Garbage collection
    - js automatically collects unused data
    - free the memory with the help of an algorithm called "Mark-and-sweep"
    - The garbage collector goes through the roots, making(remembering) them on its way
    - It then moves on to the references and marks them as well
    - the cycle continues until the garbage collector visits all the roots and references
    - the garbage collector removes all the objects, except the marked ones


- #### JIT compiled
    - before js was interpreted language
        - interpreted: apple
        - compiler: bottol ground - law
    - now js is not a purely iterpreted language
    - modern js is JIT compiled
    - JUST-IN-TIME compiler converts the entire code into machine code and execute them immediately
    - JIT-Compiler
        - JIT: Interpretation
        - Compiler: Machine code
    - js ----> parsing --AST--> compilation (JIT) --> machine code ----> execution
        - AST: abstract syntax tree


- #### multi-paradigm
    - paradigm: code structure that will determine the style or a way of programming
        - 1. procedural programming
            - involves write down instructions
            - tells the computer what it should do step-by-step
        - 2. object-oriented programming
            - modeling a system as a collection of objects
            - objects contain both methods or data
        - 3. functional programming
            - an approach to software development that uses pure functions
            - to create maintainable software


- #### proto-typed based
    - everything is object except the primitive data
    - a prototypical object is an object used as a template from which to get the initial properties for a new object ==> inheritance
    - proto-type is a blue print


- #### dynamically typed
    - do not need to specify what type this variable is
    - js engine infers what type this variable is based on the value assigned to at run time
    - as js determines the type at runtime we can re-declare the type