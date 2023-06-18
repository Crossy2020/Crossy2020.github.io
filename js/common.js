jQuery(function() {
  var windowWidth = $(window).width();
  var windowSm = 767;
  if (windowSm >= windowWidth) {
    var headerHeight = 90;
  } else {
    var headerHeight = 120;
  }
  var documentUrl = location.origin + location.pathname + location.search;
  jQuery(document).on('click', 'a[href*="#"]', function(event) {
    var anchor = event.currentTarget;
    var anchorUrl = anchor.protocol + '//' + anchor.host + anchor.pathname + anchor.search;
    if (documentUrl !== anchorUrl) {
      return true;
    }

    var speed = 500;
    var position = $(anchor.hash).offset().top - headerHeight;
    jQuery('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    event.preventDefault();
    return false;
  });
});

    var particleSystem = null;
    var stage = null;
    //  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
    window.addEventListener("load", function() {
      // Stageオブジェクトを作成します。表示リストのルートになります。
      stage = new createjs.Stage("myCanvas");
      // パーティクルシステム作成します。
      particleSystem = new particlejs.ParticleSystem();
      // パーティクルシステムの描画コンテナーを表示リストに登録します。
      stage.addChild(particleSystem.container);
      // Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
      particleSystem.importFromJson(
        // パラメーターJSONのコピー＆ペースト ここから--
          {
              "bgColor": "transparent",
              "width": 1400,
              "height": "800",
              "emitFrequency": 5,
              "startX": 700,
              "startXVariance": 600,
              "startY": 570,
              "startYVariance": 500,
              "initialDirection": 270,
              "initialDirectionVariance": 0,
              "initialSpeed": 1.9,
              "initialSpeedVariance": 14.3,
              "friction": 0.096,
              "accelerationSpeed": 0.1045,
              "accelerationDirection": 270,
              "startScale": 0.3,
              "startScaleVariance": 0.4,
              "finishScale": 0.17,
              "finishScaleVariance": 0,
              "lifeSpan": 330,
              "lifeSpanVariance": 370,
              "startAlpha": 0.81,
              "startAlphaVariance": 0,
              "finishAlpha": 0,
              "finishAlphaVariance": 0,
              "shapeIdList": [
                  "square"
              ],
              "startColor": {
                  "hue": 242,
                  "hueVariance": 25,
                  "saturation": 23,
                  "saturationVariance": 7,
                  "luminance": 31,
                  "luminanceVariance": 24
              },
              "blendMode": false,
              "alphaCurveType": "0",
              "VERSION": "1.0.0"
          }
        // パラメーターJSONのコピー＆ペースト ここまで---
      );
      // フレームレートの設定
      createjs.Ticker.framerate = 60;
      // requestAnimationFrameに従った呼び出し
      createjs.Ticker.timingMode = createjs.Ticker.RAF;
      // 定期的に呼ばれる関数を登録
      createjs.Ticker.addEventListener("tick", handleTick);
    });

    function handleTick() {
      // パーティクルの発生・更新
      particleSystem.update();
      // 描画を更新する
      stage.update();
    }
