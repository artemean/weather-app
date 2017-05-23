// function getTempCB(location, callback) {
//
// }
//
// getTempCB('Philadelphia', function (err, temp) {
//
// });
//
// function getPromise(loc) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('Not found');
//         }, 1000);
//     });
// }
//
// getPromise('asd').then(function (temp) {
//     console.log('success', temp);
// }, function (error) {
//     console.log('error', error);
// });

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('error');
        }
    });
}

addPromise(7, 8).then(function (sum) {
    console.log(sum);
}, function (err) {
    console.log(err);
});