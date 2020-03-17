$("button").click(function() {
    let gender = $(".gender").val();
    let age = $(".age").val();

    if (age > 18 && gender === "girl") {
        $(".result").append(`<p>You are Caro!<p>`);
    } else if (age <= 18 && gender === "girl") {
        $(".result").append(`<p>You are Geno!<p>`);
    }  else if ( age > 18 && gender === "boy"){
        $(".result").append(`<p>You are David!<p>`);
    }   else if ( age <= 18 && gender === "boy"){
        $(".result").append(`<p>You are Luis!<p>`);
    } else {
        $(".result").append(`<p>Please try again<p>`);

    }
    
    $("input").val("");

});