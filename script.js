

function show(id){
    console.log("is conncted")
    for(var i=1;i<6;i++)
    {
        if(i==id)
        {
            document.getElementById(i).classList.remove("hide")
            document.getElementById(i).classList.add("show")
        }
        else{
            document.getElementById(i).classList.remove("show")
            document.getElementById(i).classList.add("hide")
        }
    }
}

var images=["asset/pexels-anna-shvets-4225881.jpg","asset/pexels-jopwell-2422290.jpg","asset/pexels-pixabay-263402.jpg","asset/pexels-shvetsa-3683074.jpg","asset/pexels-pixabay-236380.jpg"]
var property=["Online Consultant","Social Forum","Always Available","Get Medicine","Choose Best"]
var defination=["Get the best advice at the comfort of your home","Connect with someone like you","Any time, We are here","No need to search, We have got you.","Make the best choice"]
var current=0

function goleft()
{
    if(current==0)
    {
        return
    }
    current=current-1
    document.getElementById("feature_image").src=images[current]
    document.getElementById("property").innerHTML=property[current]
    document.getElementById("defination").innerHTML=defination[current]

}

function goright()
{
    if(current>=images.length-1)
    {
        return
    }
    current=current+1
    document.getElementById("feature_image").src=images[current]
    document.getElementById("property").innerHTML=property[current]
    document.getElementById("defination").innerHTML=defination[current]
}


