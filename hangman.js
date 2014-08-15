$(document).ready(function(){

  var stage     = new PIXI.Stage(0xFFFFFF),
      renderer  = PIXI.autoDetectRenderer(500, 500),
      graphics  = new PIXI.Graphics();

  stage.addChild(graphics);

  document.body.appendChild(renderer.view);

  function stap1(){
    graphics.lineStyle(10, 0x000000, 1);
    graphics.moveTo(0, 400);
    graphics.lineTo(400, 400);
    
    render();
  }

  function stap2(){
    graphics.lineStyle(10, 0x000000, 1);
    graphics.moveTo(80, 395);
    graphics.lineTo(80, 0);
    render();
  }
  
  function stap3(){
    graphics.lineStyle(10, 0x000000, 1);
    graphics.moveTo(80, 5);
    graphics.lineTo(250, 5);
    render();
  }

  function stap4(){
    graphics.lineStyle(5, 0x000000, 1);
    graphics.moveTo(80, 100);
    graphics.lineTo(170 , 5);
    render();
  }

  function stap5(){
    graphics.lineStyle(5, 0x000000, 1);
    graphics.moveTo(240, 5);
    graphics.lineTo(240, 50);
    render();
  }

  function stap6(){
    graphics.lineStyle(5, 0x000000, 1);
    graphics.drawCircle(240, 75, 25);
    render();
  }

  function stap7(){
    graphics.lineStyle(5, 0x000000, 1);
    graphics.drawCircle(240, 152, 50);
    render();
  }

  function stap8(){
    graphics.lineStyle(5, 0x000000, 1);

    // Linker arm
    graphics.moveTo(200,120);
    graphics.lineTo(150,80);

    // rechter arm
    graphics.moveTo(280,120);
    graphics.lineTo(330,80);
    
    // rechter been
    graphics.moveTo(270, 190);
    graphics.lineTo(300, 300);

    // linker been
    graphics.moveTo(205, 190);
    graphics.lineTo(180, 300);

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