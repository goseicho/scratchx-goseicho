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
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', 'GOSEICHO', 'goseicho'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('GOSEICHO', descriptor, ext);
})({});

