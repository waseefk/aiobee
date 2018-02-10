function validate(key)
{var keycode=(key.which)?key.which:key.keyCode;var mobile=document.getElementById('mobile');if(!(keycode==8||keycode==46)&&(keycode<48||keycode>57))
{return!1}
else{if(mobile.value.length<10)
{return!0}
else{return!1}}}

$('#contact-form').submit(function(e){
    var name = document.getElementById('name'),
        email = document.getElementById('email'),
        mobile = document.getElementById('mobile'),
        message = document.getElementById('message');
    if(!name.value || !email.value || !mobile.value || !message.value){
      if(!message.value){
        alert("Please write something to us!");
      }
      else{
        alert("Please fill the required details!");
      }
    }
    else{
      $.ajax({
        method: "POST",
        url: "https://formspree.io/ajith@aiobee.com",
        data: $(this).serialize(),
        dataType: "json"
      });
      e.preventDefault();
      $(this).get(0).reset();
      alert("Thank you for contacting us! We will get back to you soon...");
    }
  });