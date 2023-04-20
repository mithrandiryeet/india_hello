// hello

$(function () {
  console.log("ready!");

  // click a button event to load data

  $("#loadProfile").on("click", function (e) {

    e.preventDefault(); 
    console.log("button clicked: "); // find out who clicked me, w/this?

    $.ajax({
      url: "../assets/data.json",
      dataType: "json",
      success: function (data) {
        // console.log(data.uname);
        // $("#uname").val(data.uname);
        // console.log(data.optIn);

        $("#optIn").prop("checked", data.optIn);


        $.each(data, function (key, val) {
          //step through results
          console.log(key, val);
          //get each data item
          //put it in the right place
          //$("#dataContainer").append(key + " " + val);
          $(`#${key}`).val(val);
        });

      },
    });

    // can we grab data from anohter website.
  // });

  // $("#displayProfile").on("click", function () {
  //   console.log("dipsplay button clicked: "); // find out who clicked me, w/

  //   $("#dataContainer").append(
  //     $("#userName").val() + " put in ... data from my input boxes"
  //   );
  // });
});

//date and time JS
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  
 
  //click the eye icon w/class reveal 
    $(".reveal").on('click',function() {
      let $pwd = $(".pwd");
      
      if ($pwd.attr('type') === 'password') {
          $pwd.attr('type', 'text');
        $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
      } else {
          $pwd.attr('type', 'password');
      $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
      }
  });
    


});