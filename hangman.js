$(document).ready(function(){

  var galg = new Galg();
  galg.start();

  // teken galg

  // setInterval(function(){
  //   galg.af();
  // }, 1000);
});

(function(){
  var Galg = function(){
    // Basis dingen klaarzetten
    this.stage     = new PIXI.Stage(0xFFFFFF);
    this.renderer  = PIXI.autoDetectRenderer(500, 500);
    this.graphics  = new PIXI.Graphics();

    // Hoeveel fouten heeft de speler al gemaakt
    this.pogingen  = 0;

    // Voeg galg toe op pagina
    this.stage.addChild(this.graphics);
    this.render();
  }

  // Start galgje
  Galg.prototype.start = function(){
    document.body.appendChild(this.renderer.view);  
  }

  Galg.prototype.af = function(){
    // Tel this.pogingen met 1 op
    this.pogingen++;


    if(this.pogingen == 1){
      this.stap1();
    }
    else if(this.pogingen == 2){
      this.stap2();
    }
    else if(this.pogingen == 3){
      this.stap3();
    }
    else if(this.pogingen == 4){
      this.stap4();
    }
    else if(this.pogingen == 5){
      this.stap5();
    }
    else if(this.pogingen == 6){
      this.stap6();
    }
    else if(this.pogingen == 7){
      this.stap7();
    }
    else if(this.pogingen == 8){
      this.stap8();
    }
  }

  // teken de verschillende onderdelen van de galg
  Galg.prototype.stap1 = function(){
    this.graphics.lineStyle(10, 0x000000, 1);
    this.graphics.moveTo(0, 400);
    this.graphics.lineTo(400, 400);
    this.render();
  }

  Galg.prototype.stap2 = function(){
    this.graphics.lineStyle(10, 0x000000, 1);
    this.graphics.moveTo(80, 395);
    this.graphics.lineTo(80, 0);
    this.render();
  }
  
  Galg.prototype.stap3 = function(){
    this.graphics.lineStyle(10, 0x000000, 1);
    this.graphics.moveTo(80, 5);
    this.graphics.lineTo(250, 5);
    this.render();
  }

  Galg.prototype.stap4 = function(){
    this.graphics.lineStyle(5, 0x000000, 1);
    this.graphics.moveTo(80, 100);
    this.graphics.lineTo(170 , 5);
    this.render();
  }

  Galg.prototype.stap5 = function(){
    this.graphics.lineStyle(5, 0x000000, 1);
    this.graphics.moveTo(240, 5);
    this.graphics.lineTo(240, 50);
    this.render();
  }

  Galg.prototype.stap6 = function(){
    this.graphics.lineStyle(5, 0x000000, 1);
    this.graphics.drawCircle(240, 75, 25);
    this.render();
  }

  Galg.prototype.stap7 = function(){
    this.graphics.lineStyle(5, 0x000000, 1);
    this.graphics.drawCircle(240, 152, 50);
    this.render();
  }

  Galg.prototype.stap8 = function(){
    this.graphics.lineStyle(5, 0x000000, 1);

    // Linker arm
    this.graphics.moveTo(200,120);
    this.graphics.lineTo(150,80);

    // rechter arm
    this.graphics.moveTo(280,120);
    this.graphics.lineTo(330,80);
    
    // rechter been
    this.graphics.moveTo(270, 190);
    this.graphics.lineTo(300, 300);

    // linker been
    this.graphics.moveTo(205, 190);
    this.graphics.lineTo(180, 300);

    // helaas, af
    this.helaas();

    // teken de boel op het scherm
    this.render();
  }
  
  Galg.prototype.helaas = function(){
    var helaas = new PIXI.Text("Helaas!", {fill: "red", font: "40px arial"});
    helaas.x = 175;
    helaas.y = 320;
    this.stage.addChild(helaas);
  }

  Galg.prototype.render = function(){
    this.renderer.render(this.stage);
  }

  window.Galg = Galg;

})();