$("button").click(function() {
    let gender = $(".gender").val();
    let age = $(".age").val();

    if (age > 18 && gender === "girl") {
        $(".result").append(`<p>You are Caro!<p>`);
        $(".result").append(`<img src="caro.JPG">`);

    } else if (age <= 18 && gender === "girl") {
        $(".result").append(`<p>You are Geno!<p>`);
        $(".result").append(`<img src="geno.jpg">`);
    }  else if ( age > 18 && gender === "boy"){
        $(".result").append(`<p>You are David!<p>`);
        $(".result").append(`<img src="david.jpg">`);
    }   else if ( age <= 18 && gender === "boy"){
        $(".result").append(`<p>You are Luis!<p>`);
        $(".result").append(`<img src="luis.gif">`);

    } else {
        $(".result").append(`<p>Please try again<p>`);

    }
    
    $("input").val("");

});