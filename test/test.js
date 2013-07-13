"use strict"

var interleave = require("../interleave.js")
var bits = require("bit-twiddle")

require("tape")("bit-interleave", function(t) {

 for(var x=0; x<100; ++x) {
    for(var y=0; y<100; ++y) {
      var h = interleave(x, y);
     t.equal(bits.deinterleave2(h, 0), x);
     t.equal(bits.deinterleave2(h, 1), y);
    }
  }

  for(var x=0; x<=25; ++x) {
    for(var y=0; y<=25; ++y) {
      for(var z=0; z<=25; ++z) {
        var h = interleave(x, y, z);
        t.equal(bits.deinterleave3(h, 0), x);
        t.equal(bits.deinterleave3(h, 1), y);
        t.equal(bits.deinterleave3(h, 2), z);
      }
    }
  }

  t.end()
})