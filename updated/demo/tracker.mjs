// New browser operator: median row of pixels that differ from a saved background.
export function foregroundMedian(frame, background, width, height, x0, x1, threshold) {
  const rows = new Uint32Array(height); let count=0;
  for(let y=0;y<height;y++) for(let x=x0;x<x1;x++) {
    const i=(y*width+x)*4;
    const delta=(Math.abs(frame[i]-background[i])+Math.abs(frame[i+1]-background[i+1])+Math.abs(frame[i+2]-background[i+2]))/3;
    if(delta>threshold){rows[y]++;count++;}
  }
  if(count<30)return null;
  let sum=0;for(let y=0;y<height;y++){sum+=rows[y];if(sum>=count/2)return y/(height-1);}
  return null;
}
