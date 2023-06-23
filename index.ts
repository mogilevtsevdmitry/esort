import { createReadStream, createWriteStream } from 'fs';
import esort from 'external-sorting';

esort({
  input: createReadStream('input.txt'),
  output: createWriteStream('file.txt'),
  tempDir: __dirname,
  maxHeap: 100 // This value represents the maximum amount of memory (in MB) that will be used at once by the algorithm
})
  .asc()
  .then(() => {
    console.log('done');
  })
  .catch(console.error);