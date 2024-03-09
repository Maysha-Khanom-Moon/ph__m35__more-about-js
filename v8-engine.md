## how js works behind the seen
- v8 is a free and open-source js and webAssembly engine developed by the Chromium Project for Chromium and Google Chrome web browsers
    - it's written by c++
- v8 first generates an abstract syntax tree with its own parser. Then, Interpreter ignition generates bytecode from this systax tree using internal v8 bytecode format. TurboFan compiles this bytecode into machine code. 
- v8 compiles ECMAScript directly to native machine code using just-in-time compilation before executing it