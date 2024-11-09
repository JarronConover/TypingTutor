export function Spacebar(props) {

    const { pressed, nextChar } = props;    
    
    const state = pressed ? 'pressed-spacebar' : 'spacebar';

    let highlighted = '';

    console.log(nextChar)

    if (nextChar === ' ') {
        highlighted = 'highlighted-key';
    }

    return (
        <span className={`${state} ${highlighted}`}></span>
    )
}