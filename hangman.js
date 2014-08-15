$(document).ready(function(){

  var stage     = new PIXI.Stage(0xFFFFFF),
      renderer  = PIXI.autoDetectRenderer(500, 500);

  document.body.appendChild(renderer.view);

  function stap1(){
    var lijn = new PIXI.Graphics();

    lijn.lineStyle(10, 0x000000, 1);
    lijn.moveTo(0, 400);
    lijn.lineTo(400, 400);
    stage.addChild(lijn);

    render();
  }

  function stap2(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(10, 0x000000, 1);
    lijn.moveTo(80, 395);
    lijn.lineTo(80, 0);
    stage.addChild(lijn);
    render();
  }
  
  function stap3(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(10, 0x000000, 1);
    lijn.moveTo(80, 5);
    lijn.lineTo(250, 5);
    stage.addChild(lijn);
    render();
  }

  function stap4(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(5, 0x000000, 1);
    lijn.moveTo(80, 100);
    lijn.lineTo(170 , 5);
    stage.addChild(lijn);
    render();
  }

  function stap5(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(5, 0x000000, 1);
    lijn.moveTo(240, 5);
    lijn.lineTo(240, 50);
    stage.addChild(lijn);
    render();
  }

  function stap6(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(5, 0x000000, 1);
    lijn.drawCircle(240, 75, 25);
    stage.addChild(lijn);
    render();
  }

  function stap7(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(5, 0x000000, 1);
    lijn.drawCircle(240, 152, 50);
    stage.addChild(lijn);
    render();
  }

  function stap8(){
    var lijn = new PIXI.Graphics();
    lijn.lineStyle(5, 0x000000, 1);

    // Linker arm
    lijn.moveTo(200,120);
    lijn.lineTo(150,80);

    // rechter arm
    lijn.moveTo(280,120);
    lijn.lineTo(330,80);

    
    // rechter been
    lijn.moveTo(270, 190);
    lijn.lineTo(300, 300);

    // linker been
    lijn.moveTo(205, 190);
    lijn.lineTo(180, 300);

    stage.addChild(lijn);
    render();
  }
  
  function render(){
    renderer.render(stage);
  }

  // teken galg
  stap1();
  stap2();
  stap3();
  stap4();
  stap5();
  stap6();
  stap7();
  stap8();


});