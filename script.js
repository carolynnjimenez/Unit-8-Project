$("button").click(function() {
    let gender = $(".gender").val();
    let age = $(".age").val();

    if (age > 18 && gender === "girl") {
        $(".result").append(`<p>You are Caro!<p>`);
        $(".result").append(`<img src="https://cdn.glitch.com/ae6c297f-7b9f-42ad-b819-10f69d2b50d2%2Fcaro.JPG?v=1584470554958">`);

    } else if (age <= 18 && gender === "girl") {
        $(".result").append(`<p>You are Geno!<p>`);
        $(".result").append(`<img src="https://cdn.glitch.com/ae6c297f-7b9f-42ad-b819-10f69d2b50d2%2Fgeno.jpg?v=1584470779967" class="rotate">`);
    }  else if ( age > 18 && gender === "boy"){
        $(".result").append(`<img src="https://cdn.glitch.com/ae6c297f-7b9f-42ad-b819-10f69d2b50d2%2Fdavid.jpg?v=1584470777092" class="rotate">`);
        $(".result").append(`<p>You are David!<p>`);
    }   else if ( age <= 18 && gender === "boy"){
        $(".result").append(`<p>You are Luis!<p>`);
        $(".result").append(`<img src="https://cdn.glitch.com/ae6c297f-7b9f-42ad-b819-10f69d2b50d2%2Fluis.gif?v=1584470785465">`);

    } else {
        $(".result").append(`<p>Please try again<p>`);

    }
    
    $("input").val("");

});