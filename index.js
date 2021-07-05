
var path = document.querySelector('#Transparent_Ring');
var pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

window.addEventListener("scroll", function(e) {
    
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var scp = scrollPercentage * 100;
    

    for(i=1;i<7;i++){
        eval( "var " + "dot" + i + " = " + `document.querySelector('#Dots${i}Fill ')` )
    }

    for(i=1;i<7;i++){
        eval( "var " + "dotTro" + i + " = " + `document.querySelector('#Dots${i}Tro ')` )
    }
    var contentLeft = document.querySelector('#content-left ');
    var contentright = document.querySelector('#content-right ');
    var svg = document.querySelector('#svg');

    const arr = ["first","second","third","four","five","six","seven"];
    for(i=0;i<8;i++){
        eval( "var " + arr[i] + " = " + `document.querySelectorAll('.${arr[i]}')` )
    }

    if(scp >= 0 && scp<= 16.66) {
        path.style.animation = "";
        dot1.style.opacity = 0.4;
        dot1.style.fill = "rgb(255,255,255)"
        dotTro1.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor : '#5c00a1'
        },
        {
            backgroundColor : '#5c00a1'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor : '#5c00a1'
        },
        {
            backgroundColor : '#5c00a1'
        })
        TweenMax.fromTo( contentright, 2, {
            backgroundColor : '#ccccce'
        },
        {
            backgroundColor : '#ccccce'
        })
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "visible";
            first[i].style.animation = "downTop 1.3s ease forwards"
        }
        for(i = 0 ; i < second.length ; i++){
            second[i].style.visibility  = "hidden";
            second[i].style.animation = ""
        }
        
    }
    if(scp > 16.66 && scp<= 33.33) {
        
        path.style.animation = "dot1 0.3s ease forwards";
        dot1.style.opacity = 1;
        dot1.style.fill = "rgb(0,146,255)"
        dot2.style.opacity = 0.4;
        dot2.style.fill = "rgb(255,255,255)"
        dotTro1.style.opacity = 1;
        dotTro2.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor : '#5c00a1'
        },
        {
            backgroundColor : '#4a18c5'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor : '#5c00a1'
        },
        {
            backgroundColor : '#4a18c5'
        })
        TweenMax.fromTo( contentright, 2, {
            backgroundColor : '#ccccce'
        },
        {
            backgroundColor : '#19005e'
        })
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "hidden";
            first[i].style.animation = ""
        }
        for(i = 0 ; i < second.length ; i++){
            second[i].style.visibility  = "visible";
            second[i].style.animation = "topDown 1.3s ease forwards"
        }
        for(i = 0 ; i < third.length ; i++){
            third[i].style.visibility  = "hidden";
            third[i].style.animation = ""
        }
        
    }
    if(scp > 33.33 && scp<= 50) {
        path.style.animation = "dot2 0.3s ease forwards";
        dot2.style.opacity = 1
        dot2.style.fill = "rgb(0,146,255)"
        dot3.style.opacity = 0.4;
        dot3.style.fill = "rgb(255,255,255)"
        dotTro2.style.opacity = 1;
        dotTro3.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor :  '#4a18c5'
        },
        {
            backgroundColor : '#100f39'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor :  '#4a18c5'
        },
        {
            backgroundColor : '#100f39'
        })
        TweenMax.fromTo( contentright, 2, {
            backgroundColor : '#19005e'
        },
        {
            backgroundColor : '#151345'
        })
        for(i = 0 ; i < second.length ; i++){
            second[i].style.visibility  = "hidden";
            second[i].style.animation = ""
        }
        for(i = 0 ; i < third.length ; i++){
            third[i].style.visibility  = "visible";
            third[i].style.animation = "downTop 1.3s ease forwards"
        }
        for(i = 0 ; i < four.length ; i++){
            four[i].style.visibility  = "hidden";
            four[i].style.animation = ""
        }
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "hidden";
        }
    }
    if(scp > 50 && scp<= 66.66) {
        path.style.animation = "dot3 0.3s ease forwards";
        dot3.style.opacity = 1
        dot3.style.fill = "rgb(0,146,255)"
        dot4.style.opacity = 0.4;
        dot4.style.fill = "rgb(255,255,255)"
        dotTro3.style.opacity = 1;
        dotTro4.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor : '#100f39'
        },
        {
            backgroundColor : '#17263b'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor : '#100f39'
        },
        {
            backgroundColor : '#17263b'
        })
        TweenMax.fromTo( contentright, 2, {
            backgroundColor : '#151345'
        },
        {
            backgroundColor : '#0d141c'
        })
        for(i = 0 ; i < third.length ; i++){
            third[i].style.visibility  = "hidden";
            third[i].style.animation = ""
        }
        for(i = 0 ; i < four.length ; i++){
            four[i].style.visibility  = "visible";
            four[i].style.animation = "topDown 1.3s ease forwards"
        }
        for(i = 0 ; i < five.length ; i++){
            five[i].style.visibility  = "hidden";
            five[i].style.animation = ""
        }
        for(i = 0 ; i < six.length ; i++){
            six[i].style.visibility  = "hidden";
        }
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "hidden";
        }

    }
    if(scp > 66.66 && scp<= 83.33) {
        path.style.animation = "dot4 0.3s ease forwards";
        dot4.style.opacity = 1
        dot4.style.fill = "rgb(0,146,255)"
        dot5.style.opacity = 0.4;
        dot5.style.fill = "rgb(255,255,255)"
        dotTro4.style.opacity = 1;
        dotTro5.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor : '#17263b'
        },
        {
            backgroundColor : '#184d9d'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor : '#17263b'
        },
        {
            backgroundColor : '#184d9d'
        })
        TweenMax.fromTo( contentright, 2, {
            backgroundColor : '#0d141c'
        },
        {
            backgroundColor : '#3addda'
        })
        for(i = 0 ; i < six.length ; i++){
            six[i].style.visibility  = "hidden";
            six[i].style.animation = ""
            }
        for(i = 0 ; i < four.length ; i++){
            four[i].style.visibility  = "hidden";
            four[i].style.animation = ""
        }
        for(i = 0 ; i < five.length ; i++){
            five[i].style.visibility  = "visible";
            five[i].style.animation = "topDown 1.3s ease forwards"
        }
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "hidden";
        }
    }
    if(scp > 83.33 && scp <= 100) {
        path.style.animation = "dot5 0.3s ease forwards";
        dot5.style.opacity = 1
        dot5.style.fill = "rgb(0,146,255)"
        dot6.style.opacity = 0.4;
        dot6.style.fill = "rgb(255,255,255)"
        dotTro5.style.opacity = 1;
        dotTro6.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor : '#184d9d'
        },
        {
            backgroundColor : '#06298d'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor : '#184d9d'
        },
        {
            backgroundColor : '#06298d'
        })
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "hidden";
        }
        for(i = 0 ; i < five.length ; i++){
            five[i].style.visibility  = "hidden";
            five[i].style.animation = ""
        }
        for(i = 0 ; i < six.length ; i++){
            six[i].style.visibility  = "visible";
            six[i].style.animation = "downTop 1.3s ease forwards"
        }
        for(i = 0 ; i < seven.length ; i++){
            seven[i].style.visibility  = "hidden";
            seven[i].style.animation = ""
        }
        
    }
    if(scp >= 100) {
        path.style.animation = "dot6 0.3s ease forwards";
        dot6.style.opacity = 1
        dot6.style.fill = "rgb(0,146,255)"
        dotTro6.style.opacity = 1;
        TweenMax.fromTo( contentLeft, 2, {
            backgroundColor : '#06298d'
        },
        {
            backgroundColor : '#0b944e'
        })
        TweenMax.fromTo( svg, 2, {
            backgroundColor : '#06298d'
        },
        {
            backgroundColor : '#0b944e'
        })
        TweenMax.fromTo( contentright, 2, {
            backgroundColor : '#3addda'
        },
        {
            backgroundColor : '#10ce6a'
        })
        for(i = 0 ; i < six.length ; i++){
            six[i].style.visibility  = "hidden";
            six[i].style.animation = ""
        }
        for(i = 0 ; i < seven.length ; i++){
            seven[i].style.visibility  = "visible";
            seven[i].style.animation = "topDown 1.3s ease forwards"
        }
        for(i = 0 ; i < first.length ; i++){
            first[i].style.visibility  = "hidden";
        }
    }


});