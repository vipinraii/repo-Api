const baseurl = "https://api.github.com/users/";
$(function(){
    $("#ShoeHeader").hide();
    $("#repo").hide();
});

$(function ()
  {
    $("#btn").click(function(){
        var value=$("#Username").val()
        getGitUsers(value);
        $("#ShowHeader").show();
        $("#repo").show();
    });
});
function getGitUsers(name){
    console.log(baseurl + name + "/")
};