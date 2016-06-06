$(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();

    var thing1Input = $("#thing1").val();
    var thing2Input = $("#thing2").val();
    var thing3Input = $("#thing3").val();
    var thing4Input = $("#thing4").val();
    var groceryList = [];

    groceryList.push(thing1Input, thing2Input, thing3Input, thing4Input);
    alert(groceryList);

    $(".result ul").append("<li>" + groceryList[0] + "</li>");
    $(".result ul").append("<li>" + groceryList[1] + "</li>");
    $(".result ul").append("<li>" + groceryList[2] + "</li>");
    $(".result ul").append("<li>" + groceryList[3] + "</li>");
  });
});
