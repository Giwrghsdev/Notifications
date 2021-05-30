let notifyArray = [];

window.addEventListener('message', function (event) {
    var data = event.data;
    callEvent(data);
});

let notId = 0;
function callEvent(message) {
  //if (notifyArray.length == 3) notifyArray.splice(-1, 1);

  var msg = message.message;
  var type = message.type;

  notifyArray.unshift({ id: notId, msg: msg, newNot: true, type: type });

  let notify = "";
  let color;
  $("body").css("display", "block");

  $.each(notifyArray, function (key, value) {
    
    if (value.newNot) {
      
      if (value.type == "eputixia") {
        color = "success-back";
      } else if (value.type == "proeidop"){
        color = "error-back";
      } else {
        color = "last-notification-wrapper";
      }

      if (key == 0)
        notify += `<div id="${value.id}" class="${color} mt-2 p-3 animate__animated animate__backInLeft">`;
      else
        notify += `<div id="${value.id}" class="notification-wrapper mt-2 p-3 animate__animated animate__backInLeft">`;

      if (key == 0)
        notify += `<div class="row"><div class="col-12 main-color"><div class="float-right" style="font-weight: bold;">Ειδοποίηση <i class="fas fa-bell"></i></div></div></div>`;
      else
        notify += `<div class="row"><div class="col-12 main-color"><div class="float-right" style="font-weight: bold;">Παλιά Ειδοποίηση <i class="fas fa-bell"></i></div></div></div>`;
      notify +=
        `<div class="row">` +
        `<div class="col-12 main-color">Ειδοποίηση:</div>` +
        `</div>` +
        `<div class="row">` +
        `<div class="col-12 text-light" style="font-weight:bold;">` +
        `${value.msg}` +
        `</div>` +
        `</div>` +
        `</div>`;
      $("#notify-area").append(notify);
      value.newNot = false;
     

      setTimeout(function () {
        $(`#${value.id}`).removeClass("animate__backInLeft");
        $(`#${value.id}`).addClass("animate__backOutLeft");
      }, 5000);
      notId = notId + 1;
      
    }
  });


}
