import assert from 'node:assert/strict';
import {foregroundMedian} from './demo/tracker.mjs';
const w=40,h=40,bg=new Uint8ClampedArray(w*h*4),frame=bg.slice();
assert.equal(foregroundMedian(frame,bg,w,h,0,10,30),null);
for(let y=12;y<22;y++)for(let x=2;x<8;x++)for(let c=0;c<3;c++)frame[(y*w+x)*4+c]=150;
assert.equal(foregroundMedian(frame,bg,w,h,0,10,30),16/39);
assert.equal(foregroundMedian(frame,bg,w,h,30,40,30),null);
assert.equal(foregroundMedian(frame,bg,w,h,0,10,200),null);
console.log('4 focused foreground-median checks passed. Synthetic pixels; no camera accuracy claim.');
