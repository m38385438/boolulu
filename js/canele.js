$('.offers-card1').click(function(){
    $('#offers-h2').text('Matcha flavour canele')
    $('#offers-h3').text('濃濃小山園抹茶口味')
    $('#offers-p1').text('抹茶粉、黑豆、上白糖、蛋黃、蛋白、')
    $('#offers-p2').text('牛奶、威士忌、奶油、麵粉')
    $('#offers-p3').text('本露露使用日本丸久小山園抹茶中の若竹 ，屬於薄茶風味濃郁香醇，不苦澀！有一種清新的感覺。')
    $('#offers-p4').text('小山園抹茶總共分為八個等級，之所以會選用這款，是因為"若竹"在小山園抹茶中，不論甘味或澀味都是屬於中間等級，色香味非常均衡，讓品嚐抹茶露露の人能一口咬下脆脆的外皮，緊接著入口就是濃濃滑順又具有層次感的抹茶。')
    $('.offers-card1').addClass('nopa')
    $('.offers-card2').removeClass('nopa')
    $('.offers-card1').removeClass('opa')

})
$('.offers-card2').click(function(){
    $('#offers-h2').text('Chocolate flavour canele')
    $('#offers-h3').text('黑嚕嚕巧克力口味')
    $('#offers-p1').text('巧克力、可可粉、上白糖、威士忌、蛋黃、')
    $('#offers-p2').text('蛋白、牛奶、紅酒、奶油、鮮奶油')
    $('#offers-p3').text('脆脆外殼咬下去，席捲而來的是香濃的巧克力味，配上淡淡威士忌酒香，不會有太甜的問題！只會有吃不夠的問題。')
    $('#offers-p4').text('特別選用 Royal Brackla 12 皇家柏克萊12年蘇格蘭單一純麥威士忌，這款帶有微微辛香及煙燻調性的威士忌，讓整個氣味大大升級！')
    $('.offers-card2').addClass('nopa')
    $('.offers-card1').removeClass('nopa')
    $('.offers-card1').addClass('opa')
})

$('#li-vanilla').click(function(){
    $('#li-vanilla').css('color', '#E0A45E')
    $('#li-vanilla').css('font-size', '16px')
    $('#li-matcha').css('color', '#3f3f3d')
    $('#li-matcha').css('font-size', '14px')
    $('#li-chocolate').css('color', '#3f3f3d')
    $('#li-chocolate').css('font-size', '14px')
    $('#banner-h2').text('Vanilla Flavour')
    $('#banner-p').text('Dark brown outside But soft inside')
    $('#banner-pic').attr('src','image/banner1.png')
    $('.banner-left').removeClass('text-animation')
    setTimeout(function(){
        $('.banner-left').addClass('text-animation')
    },0)
})

$('#li-matcha').click(function(){
    $('#li-vanilla').css('color', '#3f3f3d')
    $('#li-vanilla').css('font-size', '14px')
    $('#li-matcha').css('color', '#E0A45E')
    $('#li-matcha').css('font-size', '16px')
    $('#li-chocolate').css('color', '#3f3f3d')
    $('#li-chocolate').css('font-size', '14px')
    $('#banner-h2').text('Matcha Flavour')
    $('#banner-p').text('Caramelised Crunchy Crust & Custardy interior')
    $('#banner-pic').attr('src','image/banner2.png')
    $('.banner-left').removeClass('text-animation')
    setTimeout(function(){
        $('.banner-left').addClass('text-animation')
    },0)
})
$('#li-chocolate').click(function(){
    $('#li-vanilla').css('color', '#3f3f3d')
    $('#li-vanilla').css('font-size', '14px')
    $('#li-matcha').css('color', '#3f3f3d')
    $('#li-matcha').css('font-size', '14px')
    $('#li-chocolate').css('color', '#E0A45E')
    $('#li-chocolate').css('font-size', '16px')
    $('#banner-h2').text('Chocolate Flavour')
    $('#banner-p').text('Shiny, Crunchy & Crispy Skin Spongy interior')
    $('#banner-pic').attr('src','image/banner3.png')
    $('.banner-left').removeClass('text-animation')
    setTimeout(function(){
        $('.banner-left').addClass('text-animation')
    },0)
})

$('#allbtn').click(function(){
    $('#all-canele').addClass('all-canele-animation')
    $('#gift-canele').removeClass('gift-canele-animation')
    // $('#all-canele').slideDown('slow');
    // $('#all-canele').show();
    // $('#gift-canele').hide();
})
$('#giftbtn').click(function(){
    $('#all-canele').removeClass('all-canele-animation')
    $('#gift-canele').addClass('gift-canele-animation')
    // $('#all-canele').hide();
    // $('#gift-canele').slideDown('slow');
    // $('#gift-canele').show();
})

$('#ham').click(function(){
    $('.ham-menu').toggleClass('ham-menu-show');
    $('.ham-clock').removeClass('ham-clock-show');
})
$('#clock').click(function(){
    $('.ham-clock').toggleClass('ham-clock-show');
    $('.ham-menu').removeClass('ham-menu-show');
})

$('#about-left').hover(function(){
    $('#about-img').attr('src','image/about2.png')
},function(){
    $('#about-img').attr('src','image/about1.png')
})

$('#box-top').click(function(){
    $('html, body').animate({scrollTop:0},1000)
})

$(window).scroll(function(){
    console.log('scrollTop:',$(window).scrollTop());
    if ($(window).scrollTop()>=400){
        $('.about-right').css({
            transform: 'translateX(0)',
            opacity:'1'
        })
    }
    else
    {
        $('.about-right').css({
            transform: 'translateX(600px)',
            opacity:'0'
        })
    }
})

$(window).scroll(function(){
    console.log('scrollTop:',$(window).scrollTop());
    if ($(window).scrollTop()>=880){
        $('.tips-right').css({
            transform: 'translateX(0)',
            opacity:'1'
        })
    }
    else
    {
        $('.tips-right').css({
            transform: 'translateX(-200px)',
            opacity:'0'
        })
    }
})

$(window).scroll(function(){
    console.log('scrollTop:',$(window).scrollTop());
    if ($(window).scrollTop()>=880){
        $('.tips-left').css({
            transform: 'translateX(0)',
            opacity:'1'
        })
    }
    else
    {
        $('.tips-left').css({
            transform: 'translateX(200px)',
            opacity:'0'
        })
    }
})

$(window).scroll(function(){
    if ($(window).scrollTop()>=880){
        $('#tips-center-pic').css({
            transform: 'rotate(0)',
            opacity:'1'
        })
    }
    else{
        $('#tips-center-pic').css({
            transform: 'rotate(359deg)',
            opacity:'0'
        })
    }
})

$('.delivery-card1').hover(function(){
    $('.pickup').fadeIn()
},function(){
    $('.pickup').fadeOut()
})
$('.delivery-card2').hover(function(){
    $('.frozen').fadeIn()
},function(){
    $('.frozen').fadeOut()
})
$('.delivery-card3').hover(function(){
    $('.lalamove').fadeIn()
},function(){
    $('.lalamove').fadeOut()
})

