import { Select } from './select';
import './select/style.scss';


const select = new Select('#select', {
    placeholder: 'Please select option',
    // selectedId: '1',
    data: [
        {id: 1, value: 'React'},
        {id: 2, value: 'Vue'},
        {id: 3, value: 'Js'},
        {id: 4, value: 'Angular'},
        {id: 5, value: 'Node'},
        {id: 6, value: 'React Native'}
    ],
    onSelect(item) {
        console.log('Selected item', item)
    }
});

window.s = select;