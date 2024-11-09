export function Key(props) {

    const { pressed, shiftPressed, char, shiftChar, nextChar } = props;   
    
    let highlighted = ''

    if (nextChar === char && !shiftPressed) {
        highlighted = 'highlighted-key'
    } else if (shiftPressed && shiftChar === nextChar) {
        highlighted = 'highlighted-key'
    }
    
    const state = pressed ? 'pressed-key' : 'key';

    const displayChar = shiftPressed && shiftChar ? shiftChar : char;

    return (
        <span className={`${state} ${highlighted}`}>
            {displayChar}
        </span>
    )
}

// If next char is in list of shifted then highlight shift red

// if shiftPressed && shiftChar === nextChar highlight red

// if nextChar === char highlight red