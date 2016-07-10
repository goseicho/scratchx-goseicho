(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.send = function(str) {
      var req = new XMLHttpRequest();
      if ('open' in req) {  // req.open の存在チェック
        req.open ('GET', 'http://133.2.37.247/scratchX/write.cgi?text=' + str , true);
      } else {
      }
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', '%s を送る', 'send',''],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('send', descriptor, ext);
})({});
