import { useState } from 'react'
import './Shadow.css'
//import { Facheck, FaRegcopy } from 'react-icons/fa'


function Shadow(){

    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(10);
    const [blur, setBlur] = useState(15);
    const [spread, setSpread] = useState(-3);
    const [color, setColor] = useState("#000000");
    const [opacity, setOpacity] = useState(0.1);
    const [inset, setInset] = useState(false);
    const [copied, setCopied] = useState(false);

    const rgbaColor = () =>{
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    const copyToclipboard = () => {

        const code = `boxShadow:  ${inset ? 'inset' : '' } ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor()}`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

    }

    return (
        <div>
            <h1>Gerador de Box Shadow</h1>

            <main className='container'>
                <div className="controls">

                    <div className="control-group">
                        <label htmlFor="offsetX"> 
                            Deslocamento Horizontal
                        </label>

                        <input 
                            type="range"
                            id="offsetX"
                            min="-100"
                            max="100"
                            value={offsetX}
                            onChange={ e => setOffsetX(e.target.value)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor="offsetY"> 
                            Deslocamento Vertical
                        </label>

                        <input 
                            type="range"
                            id="offsetY"
                            min="-100"
                            max="100"
                            value={offsetY}
                            onChange={ e => setOffsetY(e.target.value)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor="Blur"> 
                            Desfoque (Blur)
                        </label>

                        <input 
                            type="range"
                            id="Blur"
                            min="0"
                            max="100"
                            value={blur}
                            onChange={ e => setBlur(e.target.value)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor="Spread"> 
                            Tamanho (Spread)
                        </label>

                        <input 
                            type="range"
                            id="Spread"
                            min="-50"
                            max="50"
                            value={spread}
                            onChange={ e => setSpread(e.target.value)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor="color"> 
                            Cor
                        </label>

                        <input 
                            type="color"
                            id="color"
                            value={color}
                            onChange={ e => setColor(e.target.value)}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor="opacity"> 
                            Opacidade
                        </label>

                        <input 
                            type="range"
                            id="Blur"
                            min="0"
                            max="1"
                            step="0.01"
                            value={opacity}
                            onChange={ e => setOpacity(e.target.value)}
                        />
                    </div>

                    <div className="inline-group">
                        <input 
                            type="checkbox"
                            id="inset"
                            checked={inset}
                            onChange={e => setInset(e.target.value)}
                            />

                        <label htmlFor="inset">
                            Sombra internal(Inner shadow)
                        </label>
                    </div>

                </div>

                <div className="result">
                    <div 
                    className="output-box" 
                    id="box"
                    style={
                        {
                            boxShadow: ` ${inset ? 'inset' : '' } ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor()}`
                        }
                    }
                    ></div>

                    <div className="code-output" id="code">
                        <div className="code-header">
                            <p>
                                css
                            </p>
                            <button id="copyBtn" onClick={copyToclipboard}>
                                {
                                copied //? //<Facheck/> : <FaRegcopy />  
                                } 

                                {
                                 copied ? 'Copiado' : 'Copiar codigo'    
                                }
                            </button>
                        </div>
                        <p className="code-line">

                           <span>box-shadow:</span> 

                           {
                                ` ${inset ? 'inset' : '' } ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor()}`
                           }
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Shadow