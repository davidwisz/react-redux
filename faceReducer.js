const INITIAL_STATE = { face: '(ᴗ˳ᴗ)' };
const emotions = {
  happy: '（＾ｖ＾）',
  sad: '(︶︹︺)',
  angry: 'ಠ_ಠ',
  confused: '⁀⊙﹏☉⁀'
}
function faceReducer(state=INITIAL_STATE, action) {
  if (action.type === "CHANGE_FACE") {
    // state.face = action.payload
    return {...state, face: emotions[action.payload]};
  }

  return state;
}

const store = Redux.createStore(faceReducer);

