(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.goseicho = function(str) {
        loadSound("http://goseicho.com/goseicho1.mp3")
    };

   var buffer = null;
   // Fix up prefixing
   window.AudioContext = window.AudioContext || window.webkitAudioContext;
   var context = new AudioContext();

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
    }, onError);
  }
  request.send();
}



    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', 'GOSEICHO', 'goseicho','goseicho'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('GOSEICHO', descriptor, ext);
})({});

