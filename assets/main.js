var now = new Date();
// here enter the date!
var deadline = new Date(2020, 10, 29, 0, 0, 0);

window.onload = () => {
  if (now.valueOf() > deadline.valueOf()) {
    document.getElementById("time").innerHTML = "زمان کد تخفیف گذشت!";
  } else {
    setInterval(() => {
      var now = new Date();
      var deadline = this.deadline;
      var comparetime = deadline.getTime() - now.getTime();
      var hours = Math.floor(
        comparetime / (1000 * 60 * 60)
        //  / (1000 * 60 * 60)
      );
      var minutes = Math.floor((comparetime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((comparetime % (1000 * 60)) / 1000);
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;
    }, 1000);
  }
};
// all these lines are only for copy to clipboard!!!!
function clickfunc() {
  var input = document.createElement("input");
  input.value = document.getElementById("discount-code").innerHTML;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
