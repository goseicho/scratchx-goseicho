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
       var audio =  new Audio("http://goseicho.com/goseicho1.mp3");
       audio.play();
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
<<<<<<< HEAD
            [' ', 'GOSEICHO', 'goseicho','goseicho'],
=======
            [' ', 'GOSEICHO', 'goseicho'],
<<<<<<< HEAD
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('GOSEICHO', descriptor, ext);
})({});

