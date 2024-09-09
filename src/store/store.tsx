import { configureStore, createSlice, Dispatch } from "@reduxjs/toolkit";

interface LoginState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface LoginPayload {
  email: string;
  password: string;
}

const initialState: LoginState = {
  token: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    login: (state: LoginState, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.token = action.payload.token;
    },
  },
});

export const Store = configureStore({
  reducer: { loginData: loginSlice.reducer },
});
export const loginAction = loginSlice.actions;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export function loginSendData(loginPayload: LoginPayload) {
  return async (dispatch: Dispatch) => {
    dispatch(loginAction.login({ token: null, loading: true, error: null }));
    try {
      console.log(loginPayload);
      const response = await fetch("/swagger/companies/api/v1/login/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(
          loginAction.login({ token: data.token, loading: false, error: null })
        );
      } else {
        dispatch(
          loginAction.login({
            token: null,
            loading: false,
            error: "حسابی با این مشخصات پیدا نشد",
          })
        );
      }
    } catch (error) {
      dispatch(
        loginAction.login({
          token: null,
          loading: false,
          error: "مشکل در ارتباط با سرور",
        })
      );
    }
  };
}
