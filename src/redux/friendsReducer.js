let initialState = [{
    id: 1,
    name: 'Tomas',
    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hjSKOW7NuVEDpVA9bzqDgGfyxR4c0OYKoyS19xL55ss9nPpI'
},
    {
        id: 2,
        name: 'Silvester',
        ava: 'https://static.greatbigcanvas.com/images/square/getty-images/bengal-cat-sitting-on-weathered-deck-,1102846.jpg?max=128'
    },
    {id: 3, name: 'Keks', ava: 'https://cdn140.picsart.com/268649060009201.jpg?c256x256'},
    {
        id: 4,
        name: 'Semen',
        ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHaVUareLZhmdI3_DQQZZiYk-lbrFirA4EFzWcKDzJ1Pb7ROZ'
    },
    {id: 5, name: 'Salvador', ava: 'https://cdn140.picsart.com/257115989016202.png?c256x256'}

];



const friendsReducer = (state=initialState, action) => {
    return state;
}

export default friendsReducer;