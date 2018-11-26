const satsolver = require('satsolver');
const {performance} = require('perf_hooks')
t0 = performance.now();
console.log(satsolver.solve('hole5.cnf'));
t1 = performance.now();
console.log(t0 - t1);