import $ from "jquery";

 $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100000,
        from: 200,
        to: 100000,
        grid: true,
        keyboard: true,
        step: 100,
        prefix: "$",
        max_postfix: "+"
    });