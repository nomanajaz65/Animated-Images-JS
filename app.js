const throttleFunction = (func, delay) => {
let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        // your less repition
       var div = document.createElement('div');
       div.classList.add('imagediv');

       div.style.left = dets.clientX + 'px';    //location set from mouse
       div.style.top = dets.clientY + 'px';

       var img = document.createElement('img');
       img.setAttribute("src",
        'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg');
      div.appendChild(img);


       document.body.appendChild(div);    //screen adding div
gsap.to(img ,{          
    y : "0",                          //comes upward from 0.
    ease : Power1,
    duration : .6
});



gsap.to(img ,{
    y : "100%",
    delay : .6,
    ease :Power2


});
       setTimeout(function(){
        div.remove();
       },2000);

    }, 500));

