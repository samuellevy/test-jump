const INITIAL_STATE = {
  loading: true,
  data: {
    username: "",
    sessions: []
  }
};

function sessions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: {
          username: "José Agusto da Silva Soares Brandão",
          sessions: action.data
        },
        loading: false
      };
    case "GET_DATA_ERROR":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default sessions;
