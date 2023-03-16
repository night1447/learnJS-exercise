const select = document.querySelector('#genres');
const item = select.options[select.selectedIndex];
console.log(item);


let option = new Option('Классика', 'classic');
option.selected = true;
select.append(option);
