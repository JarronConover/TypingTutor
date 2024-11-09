import { useState, useEffect } from 'react'
import { Key } from './key'
import { ShiftKey } from './shiftKey';
import { Spacebar } from './spacebar';

const phrases = [
  "Hey diddle diddle, the cat and the fiddle, the cow jumped over the moon.",
  "The little dog laughed to see such fun, and the dish ran away with the spoon.",
  "Row, row, row your boat, gently down the stream.",
  "Merrily, merrily, merrily, merrily, life is but a dream.",
]

function App() {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [shiftPressed, setShiftPressed] = useState(false);
  const [nextChar, setNextChar] = useState(null);
  const [text, setText] = useState([]);
  const [typedText, setTypedText] = useState([]);

  useEffect(() => {
    setUpText();

    function setUpText() {
      const extractedString = phrases.shift();
      let textArray = extractedString.split('')
      let newNextChar = textArray.shift();
      setText(textArray);
      setNextChar(newNextChar)
      setTypedText([]);
    }
  }, []);
  
  useEffect(() => {
    function getText() {
      if(phrases.length === 0){
        let stringOfText = "Im up in the woods, Im down on my mind, I'm building a still to slow down time."
        let textArray = stringOfText.split('')
        let newNextChar = textArray.shift();
        setText(textArray)
        setNextChar(newNextChar)
        setTypedText([]);
      } else {
        const extractedString = phrases.shift();
        let textArray = extractedString.split('')
        let newNextChar = textArray.shift();
        setText(textArray);
        setNextChar(newNextChar)
        setTypedText([]);
      }
    }

    function correctKey() {
      if (text.length === 0) {
        getText();
      } else{
        const newNextChar = text[0];
        setTypedText((prev) => [...prev, nextChar]);
        setText(text.slice(1));
        setNextChar(newNextChar);
      }
    }

    function keydown(e) {
      if (e.repeat) return;

      if (e.key === 'Shift') {
        setShiftPressed(true);
      } 
      setPressedKeys((prevKeys) => [...new Set([...prevKeys, e.key])]);

      if (e.key === nextChar) {
        correctKey()
      }
    }

    window.addEventListener("keydown", keydown);

    function keyup(e) {
      if (e.key === 'Shift') {
        setShiftPressed(false);
      } 
      setPressedKeys((prevKeys) => prevKeys.filter((key) => key !== e.key));
    }

    window.addEventListener("keyup", keyup);

    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  });

  return (
    <>
      <main className='page'>
        <div className='text'>
            <span className="typed-text">{typedText}</span>
            <span className="underlined-text">{nextChar}</span>
            <span className="remaining-text">{text}</span>
        </div>
        <div className='keyboard'>
          <div className='keys'>
            <div className='row'>
              <Key char='`' shiftChar='~' pressed={pressedKeys.includes('`') || pressedKeys.includes('~')} shiftPressed={shiftPressed} nextChar={nextChar}/>
              <Key char='1' shiftChar='!' pressed={pressedKeys.includes('1') || pressedKeys.includes('!')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='2' shiftChar='@' pressed={pressedKeys.includes('2') || pressedKeys.includes('@')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='3' shiftChar='#' pressed={pressedKeys.includes('3') || pressedKeys.includes('#')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='4' shiftChar='$' pressed={pressedKeys.includes('4') || pressedKeys.includes('$')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='5' shiftChar='%' pressed={pressedKeys.includes('5') || pressedKeys.includes('%')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='6' shiftChar='^' pressed={pressedKeys.includes('6') || pressedKeys.includes('^')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='7' shiftChar='&' pressed={pressedKeys.includes('7') || pressedKeys.includes('&')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='8' shiftChar='*' pressed={pressedKeys.includes('8') || pressedKeys.includes('*')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='9' shiftChar='(' pressed={pressedKeys.includes('9') || pressedKeys.includes('(')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='0' shiftChar=')' pressed={pressedKeys.includes('0') || pressedKeys.includes(')')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='-' shiftChar='_' pressed={pressedKeys.includes('-') || pressedKeys.includes('_')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='=' shiftChar='+' pressed={pressedKeys.includes('=') || pressedKeys.includes('+')} shiftPressed={shiftPressed} nextChar={nextChar} />
            </div>
            <div className='row'>
              <Key char='q' shiftChar='Q' pressed={pressedKeys.includes('q') || pressedKeys.includes('Q')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='w' shiftChar='W' pressed={pressedKeys.includes('w') || pressedKeys.includes('W')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='e' shiftChar='E' pressed={pressedKeys.includes('e') || pressedKeys.includes('E')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='r' shiftChar='R' pressed={pressedKeys.includes('r') || pressedKeys.includes('R')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='t' shiftChar='T' pressed={pressedKeys.includes('t') || pressedKeys.includes('T')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='y' shiftChar='Y' pressed={pressedKeys.includes('y') || pressedKeys.includes('Y')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='u' shiftChar='U' pressed={pressedKeys.includes('u') || pressedKeys.includes('U')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='i' shiftChar='I' pressed={pressedKeys.includes('i') || pressedKeys.includes('I')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='o' shiftChar='O' pressed={pressedKeys.includes('o') || pressedKeys.includes('O')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='p' shiftChar='P' pressed={pressedKeys.includes('p') || pressedKeys.includes('P')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='[' shiftChar='{' pressed={pressedKeys.includes('[') || pressedKeys.includes('{')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char=']' shiftChar='}' pressed={pressedKeys.includes(']') || pressedKeys.includes('}')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='\' shiftChar='|' pressed={pressedKeys.includes('\\') || pressedKeys.includes('|')} shiftPressed={shiftPressed} nextChar={nextChar} />
            </div>
            <div className='row'>
              <Key char='a' shiftChar='A' pressed={pressedKeys.includes('a') || pressedKeys.includes('A')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='s' shiftChar='S' pressed={pressedKeys.includes('s') || pressedKeys.includes('S')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='d' shiftChar='D' pressed={pressedKeys.includes('d') || pressedKeys.includes('D')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='f' shiftChar='F' pressed={pressedKeys.includes('f') || pressedKeys.includes('F')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='g' shiftChar='G' pressed={pressedKeys.includes('g') || pressedKeys.includes('G')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='h' shiftChar='H' pressed={pressedKeys.includes('h') || pressedKeys.includes('H')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='j' shiftChar='J' pressed={pressedKeys.includes('j') || pressedKeys.includes('J')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='k' shiftChar='K' pressed={pressedKeys.includes('k') || pressedKeys.includes('K')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='l' shiftChar='L' pressed={pressedKeys.includes('l') || pressedKeys.includes('L')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char=';' shiftChar=':' pressed={pressedKeys.includes(';') || pressedKeys.includes(':')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char="'" shiftChar='"' pressed={pressedKeys.includes("'") || pressedKeys.includes('"')} shiftPressed={shiftPressed} nextChar={nextChar} />
            </div>
            <div className='row'>
              <ShiftKey shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='z' shiftChar='Z' pressed={pressedKeys.includes('z') || pressedKeys.includes('Z')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='x' shiftChar='X' pressed={pressedKeys.includes('x') || pressedKeys.includes('X')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='c' shiftChar='C' pressed={pressedKeys.includes('c') || pressedKeys.includes('C')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='v' shiftChar='V' pressed={pressedKeys.includes('v') || pressedKeys.includes('V')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='b' shiftChar='B' pressed={pressedKeys.includes('b') || pressedKeys.includes('B')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='n' shiftChar='N' pressed={pressedKeys.includes('n') || pressedKeys.includes('N')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='m' shiftChar='M' pressed={pressedKeys.includes('m') || pressedKeys.includes('M')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char=',' shiftChar='<' pressed={pressedKeys.includes(',') || pressedKeys.includes('<')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='.' shiftChar='>' pressed={pressedKeys.includes('.') || pressedKeys.includes('>')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <Key char='/' shiftChar='?' pressed={pressedKeys.includes('/') || pressedKeys.includes('?')} shiftPressed={shiftPressed} nextChar={nextChar} />
              <ShiftKey shiftPressed={shiftPressed} nextChar={nextChar}/>
            </div>
            <div className='row'>
              <Spacebar pressed={pressedKeys.includes(' ')} nextChar={nextChar}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
