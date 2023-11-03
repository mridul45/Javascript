const accountId = 144553;
let accountEmail = "msinghal445@gmail.com"
var accountPassword = "12345"
accountCity = "Ambala Cantt"

/*
const means value cannot be changed


accountId = 2;
console.log(accountId)  

accountId = 2;
          ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/workspaces/Javascript/Folder1/file_2.js:9:11)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.1

The above threw error.

*/


accountEmail = "ms@gmail.com"
accountPassword = "2365"
accountCity = "City"

// Now there is an another way to print all these changes as again and again writing console statement are tiresome
/*
const means value cannot be changed


accountId = 2;
console.log(accountId)  

accountId = 2;
          ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/workspaces/Javascript/Folder1/file_2.js:9:11)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.8.1

The above threw error.in) $ node "/workspaces/Javascript/Folder1/file_2.js"
┌─────────┬────────────────┐
│ (index) │     Values     │
├─────────┼────────────────┤
│    0    │     144553     │
│    1    │ 'ms@gmail.com' │
│    2    │     '2365'     │
│    3    │     'City'     │
└─────────┴────────────────┘
*/

// There is a problem with var related to scope so let is used from now

let state;
console.log(state)

// The value for above is undefined