### Execution Contexxt
- an environment
- inside the execution context a piece of js code gets executed
- variables, parameters and other information related to the piece of code get stored in the execution context
- there are 2 types:
    - GEC: global execution context
    - FEC: function execution centext

- #### global execution context
    - whenever the js engine reveives a script file, it first creates a default execution context known as the GCE
        - base/ default execution context
        - all js code that is not inside of a function gets executed
        - for every js file, there can only be one GEC

- #### function execution context
    - whenever a function called, the js engine creates a FEC
        - every time a function is called, a new execution context is created for that function
        - each function has its own execution context
        - since every funtion call gets its own FEC, there can be more than one FEC in the runtion of a script


- #### Phases
    - the execution context is created in two phases:
        - creation phase
        - execution phase


- #### creation phase
    - global execution context
    - creation phase is the phase in which the js engine has called a function but its execution has not started
        - js engine is in the compilation phase
        - it just scans over the function code to compile the code
        - it doesn't execute any code


- #### execution phase
    - during the execution phase, the js engine executes the code line by line
        - assing the value to variables
        - executes the function calls
