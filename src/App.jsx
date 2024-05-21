import { useState, useRef } from "react"

const App = () => {

  const [rodando, setRodando] = useState(false)
  const ref = useRef(null)
  const dados = {
    video: "https://i.imgur.com/hPJh8uG.mp4"
  }

  function esperaClick() {
    const comportamentoEsperado = !rodando
    setRodando(comportamentoEsperado)
    if (comportamentoEsperado)
      ref.current.play()
    else
      ref.current.pause()
  }

  return (
    <>
      <h2>Dar o Play</h2>
      <video ref={ref} width="250"
          onPlay={() => setRodando(true)}
          onPause={() => setRodando(false)}
          style={{ borderRadius: 32 }}>
        <source src={dados.video} type="video/mp4" />

      </video>
      <button onClick={esperaClick}>
        {rodando ? "Pause" : "Play"}
        </button>
    </>
  )
}

export default App