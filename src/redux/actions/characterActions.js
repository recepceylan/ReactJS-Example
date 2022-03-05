import * as actionTypes from "./actionTypes";

export function getCharactersSuccess(characters) {
  return { type: actionTypes.GET_CHARACTERS_SUCCESS, payload: characters };
}

export function getCharacters(id) {
  return function (dispatch) {
    let characters = JSON.parse(localStorage.getItem("characterList"));

    if (characters) {
      return dispatch(getCharactersSuccess(characters));
    } else {
      let url = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";
      if (id) {
        url += "?id=" + id;
      }
      return fetch(url)
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("characterList", JSON.stringify(result));
          dispatch(getCharactersSuccess(result));
        });
    }
  };
}

// export function saveCharacter(character) {
// //  ekleme işlemleri
//   console.log(character);
// }