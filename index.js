
var path = document.querySelector('#Transparent_Ring');
var pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

window.scroll(0,1)

function scrollToThis(length){
    window.scroll(0,length*335)
    
    var w = window.innerWidth;
    var h = window.innerHeight;

    console.log(length*335 , h)

}

var w = window.innerWidth;
var h = window.innerHeight;
console.log(w,h)

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
    
    const upAndDown1 = ["up", "down"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown1[i] + " = " + `document.querySelectorAll('.${upAndDown1[i]}')` )
    }
    const upAndDown2 = ["upTwo", "downTwo"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown2[i] + " = " + `document.querySelectorAll('.${upAndDown2[i]}')` )
    }
    const upAndDown3 = ["upThree", "downThree"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown3[i] + " = " + `document.querySelectorAll('.${upAndDown3[i]}')` )
    }
    const upAndDown4 = ["upFour", "downFour"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown4[i] + " = " + `document.querySelectorAll('.${upAndDown4[i]}')` )
    }
    const upAndDown5 = ["upFive", "downFive"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown5[i] + " = " + `document.querySelectorAll('.${upAndDown5[i]}')` )
    }
    const upAndDown6 = ["upSix", "downSix"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown6[i] + " = " + `document.querySelectorAll('.${upAndDown6[i]}')` )
    }
    const upAndDown7 = ["upSeven", "downSeven"];
    for(i = 0 ; i < 2 ; i++){
        eval( "var " + upAndDown7[i] + " = " + `document.querySelectorAll('.${upAndDown7[i]}')` )
    }

//ONE
    if(scp >= 0 && scp<= 16.66) {

        path.style.animation = "";
        dot1.style.opacity = 0.4;
        dot1.style.fill = "rgb(255,255,255)"
        dotTro1.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {backgroundColor : '#5c00a1'},{backgroundColor : '#5c00a1'})
        TweenMax.fromTo( svg, 2, {backgroundColor : '#5c00a1'},{backgroundColor : '#5c00a1'})
        TweenMax.fromTo( contentright, 2, {backgroundColor : '#ccccce'},{backgroundColor : '#ccccce'})

        for(i = 0 ; i < first.length ; i++){first[i].style.visibility  = "visible";}

        for(i = 0 ; i < up.length ; i++){up[i].style.animation = "up 0.9s ease forwards"}
        for(i = 0 ; i < down.length ; i++){down[i].style.animation = "down 0.9s ease forwards"}

        for(i = 0 ; i < upTwo.length ; i++){upTwo[i].style.animation = ""}
        for(i = 0 ; i < downTwo.length ; i++){downTwo[i].style.animation = ""}

        for(i = 0 ; i < second.length ; i++){second[i].style.visibility  = "hidden";second[i].style.animation = "" }

    }
    //TWO
    if(scp > 16.66 && scp<= 33.33) {
        
        path.style.animation = "dot1 0.3s ease forwards";
        dot1.style.opacity = 1;
        dot1.style.fill = "rgb(0,146,255)"
        dot2.style.opacity = 0.4;
        dot2.style.fill = "rgb(255,255,255)"
        dotTro1.style.opacity = 1;
        dotTro2.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {backgroundColor : '#5c00a1'},{backgroundColor : '#4a18c5'})
        TweenMax.fromTo( svg, 2, {backgroundColor : '#5c00a1'},{backgroundColor : '#4a18c5'})
        TweenMax.fromTo( contentright, 2, {backgroundColor : '#ccccce'},{backgroundColor : '#19005e'})

        for(i = 0 ; i < first.length ; i++){first[i].style.visibility  = "hidden";}

        for(i = 0 ; i < up.length ; i++){up[i].style.animation = ""}
        for(i = 0 ; i < down.length ; i++){down[i].style.animation = ""}

        for(i = 0 ; i < upTwo.length ; i++){upTwo[i].style.animation = "up 0.9s ease forwards"}
        for(i = 0 ; i < downTwo.length ; i++){downTwo[i].style.animation = "down 0.9s ease forwards"}

        for(i = 0 ; i < second.length ; i++){second[i].style.visibility  = "visible";}
        for(i = 0 ; i < third.length ; i++){third[i].style.visibility  = "hidden";third[i].style.animation = ""}

        for(i = 0 ; i < upThree.length ; i++){upThree[i].style.animation = ""}
        for(i = 0 ; i < downThree.length ; i++){downThree[i].style.animation = ""}
        
    }
    //THREE
    if(scp > 33.33 && scp<= 50) {
        path.style.animation = "dot2 0.3s ease forwards";
        dot2.style.opacity = 1
        dot2.style.fill = "rgb(0,146,255)"
        dot3.style.opacity = 0.4;
        dot3.style.fill = "rgb(255,255,255)"
        dotTro2.style.opacity = 1;
        dotTro3.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {backgroundColor :  '#4a18c5'},{backgroundColor : '#100f39'})
        TweenMax.fromTo( svg, 2, {backgroundColor :  '#4a18c5'},{backgroundColor : '#100f39'})
        TweenMax.fromTo( contentright, 2, {backgroundColor : '#19005e'},{backgroundColor : '#151345'})
        for(i = 0 ; i < second.length ; i++){second[i].style.visibility  = "hidden";second[i].style.animation = ""}
        
        for(i = 0 ; i < upTwo.length ; i++){upTwo[i].style.animation = ""}
        for(i = 0 ; i < downTwo.length ; i++){downTwo[i].style.animation = ""}

        for(i = 0 ; i < upThree.length ; i++){upThree[i].style.animation = "up 0.9s ease forwards"}
        for(i = 0 ; i < downThree.length ; i++){downThree[i].style.animation = "down 0.9s ease forwards"}

        for(i = 0 ; i < third.length ; i++){third[i].style.visibility  = "visible";}

        for(i = 0 ; i < four.length ; i++){four[i].style.visibility  = "hidden";}
        for(i = 0 ; i < upFour.length ; i++){upFour[i].style.animation = ""}
        for(i = 0 ; i < downFour.length ; i++){downFour[i].style.animation = ""}


    }
    function four(){
        
    }
    if(scp > 50 && scp<= 66.66) {
        path.style.animation = "dot3 0.3s ease forwards";
        dot3.style.opacity = 1
        dot3.style.fill = "rgb(0,146,255)"
        dot4.style.opacity = 0.4;
        dot4.style.fill = "rgb(255,255,255)"
        dotTro3.style.opacity = 1;
        dotTro4.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {backgroundColor : '#100f39'},{backgroundColor : '#17263b'})
        TweenMax.fromTo( svg, 2, {backgroundColor : '#100f39'},{backgroundColor : '#17263b'})
        TweenMax.fromTo( contentright, 2, {backgroundColor : '#151345'},{backgroundColor : '#0d141c'})
        for(i = 0 ; i < third.length ; i++){third[i].style.visibility  = "hidden";}

        for(i = 0 ; i < upThree.length ; i++){upThree[i].style.animation = ""}
        for(i = 0 ; i < downThree.length ; i++){downThree[i].style.animation = ""}

        for(i = 0 ; i < upFour.length ; i++){upFour[i].style.animation = "up 0.9s ease forwards"}
        for(i = 0 ; i < downFour.length ; i++){downFour[i].style.animation = "down 0.9s ease forwards"}

        for(i = 0 ; i < four.length ; i++){four[i].style.visibility  = "visible";}

        for(i = 0 ; i < five.length ; i++){five[i].style.visibility  = "hidden";}
        for(i = 0 ; i < upFive.length ; i++){upFive[i].style.animation = ""}
        for(i = 0 ; i < downFive.length ; i++){downFive[i].style.animation = ""}

    }
    //FIVE
    if(scp > 66.66 && scp<= 83.33) {
        path.style.animation = "dot4 0.3s ease forwards";
            dot4.style.opacity = 1
            dot4.style.fill = "rgb(0,146,255)"
            dot5.style.opacity = 0.4;
            dot5.style.fill = "rgb(255,255,255)"
            dotTro4.style.opacity = 1;
            dotTro5.style.opacity = 0;
            TweenMax.fromTo( contentLeft, 2, {backgroundColor : '#17263b'},{backgroundColor : '#184d9d'})
            TweenMax.fromTo( svg, 2, {backgroundColor : '#17263b'},{backgroundColor : '#184d9d'})
            TweenMax.fromTo( contentright, 2, {backgroundColor : '#0d141c'},{backgroundColor : '#3addda'})
    
            for(i = 0 ; i < six.length ; i++){six[i].style.visibility  = "hidden";}
    
            for(i = 0 ; i < four.length ; i++){four[i].style.visibility  = "hidden";}
    
            for(i = 0 ; i < five.length ; i++){five[i].style.visibility  = "visible";}
        
            for(i = 0 ; i < upFive.length ; i++){upFive[i].style.animation = "up 0.9s ease forwards"}
            for(i = 0 ; i < downFive.length ; i++){downFive[i].style.animation = "down 0.9s ease forwards"}
    
    
            for(i = 0 ; i < upFour.length ; i++){upFour[i].style.animation = ""}
            for(i = 0 ; i < downFour.length ; i++){downFour[i].style.animation = ""}
    
            for(i = 0 ; i < upSix.length ; i++){upSix[i].style.animation = ""}
            for(i = 0 ; i < downSix.length ; i++){downSix[i].style.animation = ""}
        
    }//SIX
    if(scp > 83.33 && scp <= 100) {
        path.style.animation = "dot5 0.3s ease forwards";
        dot5.style.opacity = 1
        dot5.style.fill = "rgb(0,146,255)"
        dot6.style.opacity = 0.4;
        dot6.style.fill = "rgb(255,255,255)"
        dotTro5.style.opacity = 1;
        dotTro6.style.opacity = 0;
        TweenMax.fromTo( contentLeft, 2, {backgroundColor : '#184d9d'},{backgroundColor : '#06298d'})
        TweenMax.fromTo( svg, 2, {backgroundColor : '#184d9d'},{backgroundColor : '#06298d'})
        
        for(i = 0 ; i < five.length ; i++){five[i].style.visibility  = "hidden";}
        
        for(i = 0 ; i < six.length ; i++){six[i].style.visibility  = "visible";}

        for(i = 0 ; i < upSix.length ; i++){upSix[i].style.animation = "up 0.9s ease forwards"}
        for(i = 0 ; i < downSix.length ; i++){downSix[i].style.animation = "down 0.9s ease forwards"}

        for(i = 0 ; i < seven.length ; i++){seven[i].style.visibility  = "hidden";}
        for(i = 0 ; i < upFive.length ; i++){upFive[i].style.animation = ""}
        for(i = 0 ; i < downFive.length ; i++){downFive[i].style.animation = ""}

        for(i = 0 ; i < upSeven.length ; i++){upSeven[i].style.animation = ""}
        for(i = 0 ; i < downSeven.length ; i++){downSeven[i].style.animation = ""}
        
    }//SEVEN
    if(scp >= 100) {
        path.style.animation = "dot6 0.3s ease forwards";
        dot6.style.opacity = 1
        dot6.style.fill = "rgb(0,146,255)"
        dotTro6.style.opacity = 1;
        TweenMax.fromTo( contentLeft, 2, {backgroundColor : '#06298d'},{backgroundColor : '#0b944e'})
        TweenMax.fromTo( svg, 2, {backgroundColor : '#06298d'},{backgroundColor : '#0b944e'})
        TweenMax.fromTo( contentright, 2, {backgroundColor : '#3addda'},{backgroundColor : '#10ce6a'})
        for(i = 0 ; i < six.length ; i++){
            six[i].style.visibility  = "hidden";
        }
        for(i = 0 ; i < seven.length ; i++){
            seven[i].style.visibility  = "visible";
        }
        for(i = 0 ; i < upSeven.length ; i++){upSeven[i].style.animation = "up 0.9s ease forwards"}
        for(i = 0 ; i < downSeven.length ; i++){downSeven[i].style.animation = "down 0.9s ease forwards"}

        for(i = 0 ; i < upSix.length ; i++){upSix[i].style.animation = ""}
        for(i = 0 ; i < downSix.length ; i++){downSix[i].style.animation = ""}

        
    }

});