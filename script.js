function atualizarRelogio() {
    const relogio = document.getElementById('relogio')
   const agora = new Date();
   agora.setHours(agora.getHours()-3)
   cont horas = String(agora.getHours()).padStart(2,'0')
   cont minutos = String(agora.getMinutes())pedStart(2,'0')
   cont segundos = String(agora.getMinutes())pedStart(2,'0')
   relogioElement.textContent = `${horas}` `${minutos}``${segundos}`
}
