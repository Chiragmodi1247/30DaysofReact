console.log("Script loaded");

function openPage() {
  console.log("Default prevented");
}

function checkForm() {
//     e.preventDefault();
//     alert("i prevented")
//   console.log("Form is okay");
//   alert("this called");
//   window.location.href = 'index2.html'

return true;

}

// $('#myForm').submit(function(e){
//     e.preventDefault();
//   console.log("Default prevented")
// $.ajax({
//         url:'/Car/Edit/17/',
//         type:'post',
//         data:$('#myForm').serialize(),
//         success:function(){
//             //whatever you wanna do after the form is successfully submitted
//         }
//     });
// });

// document.getElementById("submit_btn").addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("Default prevented")
// });
