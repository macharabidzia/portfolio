import {
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
  PROJECTS_LIST_FAIL,
} from './constants';
import axios from 'axios';
export const listProjects = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: PROJECTS_LIST_REQUEST,
    });
    const config = {
      headers: {
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`projects.json`, config);
    dispatch({
      type: PROJECTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
