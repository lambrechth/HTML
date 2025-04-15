function hora(){
    let relogio = document.getElementById('relogio')

    let tempo = new Date();
    let horas =(tempo.getHours())padstart(2,'0');;
    let minutos =(tempo.getMinutes()).padstart(2,'0');
    let segundos =(tempo.getSeconds())padstart(2,'0');;

    relogio.innerHTML = `${horas}:${minutos}:${segundos}` 
    


  }
setInterval(hora,1000)

  hora();

  