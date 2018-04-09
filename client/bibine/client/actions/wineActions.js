import wineService from '../services/wines';

function fetchWines() {
  return function(dispatch) {
    return wineService.getWines()
      .then(({ wines }) => {
        dispatch({
          type: 'FETCH_WINES_SUCCESS',
          payload: {
            wines
          }
        });
      });
  };
}

export {
  fetchWines
};
