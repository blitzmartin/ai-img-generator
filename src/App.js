import './App.css';
import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

function App() {
  const [prompt, setPrompt] = useState("")
  const [imgSrc, setImgSrc] = useState("")
  const configuration = new Configuration({
    apiKey: "",
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImgSrc(res.data.data[0].url);
  }


  return (
    <div className="App">
      <h1>Generate image with AI</h1>
      <div className='input-container'>
      <input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate</button>
      </div>
      {imgSrc !== "" && <div className="img-container">
        <img src={imgSrc} alt={prompt} />
      </div>}
    </div>
  );
}

export default App;
