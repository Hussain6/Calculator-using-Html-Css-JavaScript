function display_values(value)  //Javascript function to Display all the buttons pressed
{ 
    if(value=="C")
    {
        document.getElementById("display").value=""
    }
     else if(value=="mrc" || value=="m+" || value=="m-")
{
    document.getElementById("display").value="Functionality Not Available"
}
    else
    {
        document.getElementById("display").value+=value
    }
}

function result()
{
    //Try catch to Detect Errors
    try{ 
        let allstring= document.getElementById("display")
        allstring.value=eval(allstring.value)
    }
    catch(err) {
        document.getElementById("display").value = err.message;
      }
}