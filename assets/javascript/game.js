//objects for each character? with hit points, attack power, and counter attack power, and function for attacking and function for counter attack.



$(document).ready(function(){

    var characterChosen = false;
    var enemyChoice;

    function createLuke(){
        $("#luke").append("<img src='assets/css/images/luke.png'>").addClass("choice");
        lukeHealth = 100;
        lukeAttack = 6;
        lukeCounter = 12;
    }

    function createHan(){
        $("#hanSolo").append("<img src='assets/css/images/hansolo.png'>").addClass("choice");
        hanHealth = 140;
        hanAttack = 12;
        hanCounter = 15;
    };
    function createGreedo(){
        $("#greedo").append("<img src='assets/css/images/greedo.png'>").addClass("choice");
        greedoHealth = 180;
        greedoAttack = 8;
        greedoCounter = 20;
    }

    function createC3(){
        $("#c3po").append("<img src='assets/css/images/c3po.png'>").addClass("choice");
        c3Health = 120;
        c3Attack = 20;
        c3Counter = 18;
    }

    createLuke();
    createHan();
    createGreedo();
    createC3();

  
$("body").on("click", ".choice", function(){

    $(".jumbotron").text("Now choose an enemy to fight against");

    if($(this).is($("#luke")) && (characterChosen == false)) {
        $("#hanSolo").appendTo($("#enemy")).addClass("enemy");
        $("#greedo").appendTo($("#enemy")).addClass("enemy");
        $("#c3po").appendTo($("#enemy")).addClass("enemy");
    }
    else if($(this).is($("#hanSolo")) && (characterChosen == false)) {
        $("#luke").appendTo($("#enemy")).addClass("enemy");
        $("#greedo").appendTo($("#enemy")).addClass("enemy");
        $("#c3po").appendTo($("#enemy")).addClass("enemy");
    }
    else if($(this).is($("#greedo")) && (characterChosen == false)) {
        $("#luke").appendTo($("#enemy")).addClass("enemy");
        $("#hanSolo").appendTo($("#enemy")).addClass("enemy");
        $("#c3po").appendTo($("#enemy")).addClass("enemy");
    }
    else if($(this).is($("#c3po")) && (characterChosen == false)) {
        $("#luke").appendTo($("#enemy")).addClass("enemy");
        $("#greedo").appendTo($("#enemy")).addClass("enemy");
        $("#hanSolo").appendTo($("#enemy")).addClass("enemy");
    }
    characterChosen = true;
    enemyChoice = false;
    $("#select").hide();

});

$("body").on("click", ".choice", function(){
    if($(this).is($("#luke")) && (enemyChoice == false)) {
        $("#luke").removeClass("enemy");
        $(".enemy").appendTo("#enemiesRow");
    }
})















});