import { LOAD_ISSUE_REQUEST, LOAD_ISSUE_SUCCESS, LOAD_ISSUE_FAILED, URL_API } from '../constants/constants'

export let load_ussue = (payload) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_ISSUE_REQUEST
    })

    fetch(URL_API + '/repos/' + payload.user + '/' + payload.repo + '/issues/' + payload.id + '?access_token=153cffde38f6085cd0fca9e0cb31232b45bbad0c')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            dispatch({
                type: LOAD_ISSUE_SUCCESS,
                payload: {
                    results: json
                }
            })
        }).catch(function(ex) {
            dispatch({
              type: LOAD_ISSUE_FAILED
            })
            console.log('parsing failed', ex);
    })
  }
}