## js is single threaded
- synchronous and asynchronous
- #### synchronous
    - serial-wise
    - wait for others
    - call stack

- #### asynchronous
    - no serial
    - do not see other
    - event(waiting) queue a chole jay
    - they do late
    - setTimeout, setInterval, fetch, await, etc


- #### Call stack
    - keeps track of all the operations in line to be executed
    - whenever a function is finished. it is popped from the stack

- #### Event queue
    - sends new functions to the stack for processing
    - follows the queue data structure
    - maintains the correct sequence in which all operations should be sent for executoin