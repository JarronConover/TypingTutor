export function ShiftKey(props) {

    const { shiftPressed, nextChar} = props;  
    
    const shiftKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let highlighted = '';
    
    if (shiftKeys.includes(nextChar) && !shiftPressed) {
        highlighted = 'highlighted-key';
    }
    
    const state = shiftPressed ? 'pressed-shift-key' : 'shift-key';

    return (
        <span className={`${state} ${highlighted}`}>
            Shift
        </span>
    )
}