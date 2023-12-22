var btn = document.querySelector(".button");

btn.onclick = ()=>{
    var fname = document.getElementById("fname").value;
    document.getElementById("td1").innerText = fname;

    var lname = document.getElementById("lname").value;
    document.getElementById("td2").innerText = lname;

    var address = document.getElementById("address").value;
    document.getElementById("td3").innerText = address;

    var pin = document.getElementById("pin").value;
    document.getElementById("td4").innerText = pin;
    
    var country = document.getElementById("country").value;
    document.getElementById("td5").innerText = country;

    var food = document.getElementById("food").value;
    document.getElementById("td6").innerText = food;
}
