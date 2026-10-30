import './App.css'

function App() {

  return (
      <section id="center">
        mode
        <img src="/images/d2.png" style={{width:200}} height={100} alt="" />
        {/* work with only ./ name of the asset in public */}
        <img src="./images/d2.png" width={200} height={100} alt="" /> 
        </section>
  )
}

export default App
