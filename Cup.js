const cup1=document.querySelector(".cup1");
const cup2=document.querySelector(".cup2");
cup1.addEventListener("click",function(){
    var comp = Math.random();
    if(comp < 0.25){
      window.location.href = "succes.html";
    }else {
      Swal.fire({
  title: 'Oops..Kamu memilih cup yang salah',
  text: "Ayoo jangan menyerah Sinn",
  icon: 'error',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Main Lagi',
  cancelButtonText: 'batal'
})
    }
    });
    
    cup2.addEventListener("click",function(){
    var comp = Math.random();
    if(comp < 0.3){
      window.location.href = "succes.html";
    }else {
Swal.fire({
  title: 'Oops..Kamu memilih cup yang salah',
  text: "Ayoo jangan menyerah Sinn",
  icon: 'error',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Main Lagi',
  cancelButtonText: 'batal'
})
    }
    });