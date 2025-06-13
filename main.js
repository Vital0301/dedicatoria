function playMusic() {
    const audio = document.getElementById('myAudio');
    audio.play();
}

 // Altere esta data para a que desejar
    const dataInicial = new Date("2020-07-21T00:00:00");

    function atualizarTempo() {
      const agora = new Date();
      let diffMs = agora - dataInicial;

      const segundosTotais = Math.floor(diffMs / 1000);
      const anos = Math.floor(segundosTotais / (365.25 * 24 * 3600));
      const meses = Math.floor((segundosTotais % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600));
      const dias = Math.floor((segundosTotais % (30.44 * 24 * 3600)) / (24 * 3600));
      const horas = Math.floor((segundosTotais % (24 * 3600)) / 3600);
      const minutos = Math.floor((segundosTotais % 3600) / 60);
      const segundos = segundosTotais % 60;

      document.getElementById("tempoPassado").innerText =
        `${anos} ano(s), ${meses} mês(es), ${dias} dia(s)`;
    }

    // Atualiza a cada segundo
    setInterval(atualizarTempo, 1000);
    atualizarTempo(); // Chama imediatamente ao carregar