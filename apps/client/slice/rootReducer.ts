import { Action, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import userInfoSlice, { UserInfoState } from "@/slice/userInfo/userInfoSlice";
import { RootState } from "@/store/configStore";

export interface RootStates {
  findinfo: UserInfoState;
}
interface HydrateAction extends Action<typeof HYDRATE> {
  payload: RootState;
}
const combinedReducer = combineReducers({
  findinfo: userInfoSlice,
});
export const rootReducer = (
  state: RootStates,
  action: HydrateAction | ReturnType<typeof combinedReducer>
) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload; // action.payload에 서버에서 넘어온 스테이트가 담겨있는것임..! 이게 그리고 리턴 돼서 스토어가 됨
    default: {
      return combinedReducer(state, action);
    }
  }
};
