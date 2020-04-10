function show(div_id){
  document.getElementById("basic").style.display="none";
  document.getElementById("intermediate").style.display="none";
  document.getElementById("advanced").style.display="none";
  document.getElementById(div_id).style.display="block";

  document.getElementsByClassName("btn-get-started")[0].classList.add('btn-services');
  document.getElementsByClassName("btn-get-started")[0].classList.remove('btn-get-started');
  document.getElementById("ps_"+div_id).classList.add('btn-get-started');

}