window.addEventListener('load', () => {
  const faceBox = document.querySelector('#face-container');
  const btns = document.querySelectorAll('.emotion-btn');
  faceBox.innerHTML = store.getState().face;
  btns.forEach(btn => btn.addEventListener('click', (evt) => {
    let key = evt.target.id;
    let action = {type: 'CHANGE_FACE', payload: key};
    store.dispatch(action);
  }))
  store.subscribe(() => {
    faceBox.innerHTML = store.getState().face;
  })
  store.dispatch({type: 'CHANGE_FACE', payload: key});
})