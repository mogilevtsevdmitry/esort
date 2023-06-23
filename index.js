"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var external_sorting_1 = require("external-sorting");
(0, external_sorting_1["default"])({
    input: (0, fs_1.createReadStream)('input.txt'),
    output: (0, fs_1.createWriteStream)('file.txt'),
    tempDir: __dirname,
    maxHeap: 100 // This value represents the maximum amount of memory (in MB) that will be used at once by the algorithm
})
    .asc()
    .then(function () {
    console.log('done');
})["catch"](console.error);
