var interval;
   var minutes = 1;
   var seconds = 00;
$('#countdown').addClass("countdown1");
   function countdown(element) {
       interval = setInterval(function() {
           var el = document.getElementById(element);
           if(seconds == 0) {
               if(minutes == 0) {
                   alert(el.innerHTML = "countdown's over!");
                   clearInterval(interval);
                   return;
               } else {
                   minutes--;
                   seconds = 60;
               }
           }
           if(minutes > 0) {
               var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
           } else {
               var minute_text = '';
           }
           var second_text = seconds > 1 ? 'seconds' : 'second';
           el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
           seconds--;
       }, 1000);
   }
var reset = document.getElementById('reset');
reset.onclick = function() {
   minutes = 1;
   seconds = 00;
   clearInterval(interval);
   interval = null;
}
var start = document.getElementById('start');

start.onclick = function() {
   if (!interval) {
       countdown('countdown');
   }
}
