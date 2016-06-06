$(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();
    var blanks = ["thing1", "thing2", "thing3", "thing4"];
    var groceryList = [];
    blanks.forEach(function(blank){
      var userInput = $("#" + blank).val().toUpperCase();
      groceryList.push(userInput);
    });
    groceryList.sort().forEach(function(item){
      $(".result ul").append("<li>" + item + "</li>");
    });
    $(".blanks").hide();
  });
});
