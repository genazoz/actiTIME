$(document).ready(function(){$(".slick-slider").slick({dots:!0,infinite:!1,speed:300,slidesToShow:2,slidesToScroll:2,prevArrow:!1,nextArrow:!1,responsive:[{breakpoint:1300,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$("html").on("click","header .MM-button",function(){$(this).toggleClass("active"),$(".mobile-menu").toggleClass("active")});var dropdown=$(".mobile-menu__dropdown");dropdown.each(function(){var button=$(this).find('p[data-toggle="dropdown"]'),menu=$(this).find(".mobile-menu__dropdown-menu");button.click(function(event){menu.is(".show")?(menu.removeClass("show"),menu.addClass("hide")):(menu.addClass("show"),menu.removeClass("hide"))})});