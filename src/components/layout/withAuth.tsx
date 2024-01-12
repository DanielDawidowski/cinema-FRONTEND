import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { userService } from "../../services/api/user/user.service";
import {
  addUser,
  clearUser,
} from "../../redux-toolkit/reducers/user/user.reducer";
import useEffectOnce from "../../hooks/useEffectOnce";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ISignUpData } from "../../interfaces/auth/auth.interface";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithAuthComponent(props: P) {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const userStorage = useLocalStorage<ISignUpData>("user");

    const user = userStorage.get();

    const checkUser = useCallback(async () => {
      try {
        const response = await userService.checkCurrentUser();
        dispatch(
          addUser({
            token: response.data.token,
            profile: response.data.user,
          })
        );
      } catch (error) {
        dispatch(clearUser());
      }
    }, [dispatch]);

    useEffectOnce(() => {
      if (user) {
        checkUser();
      }
    });

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
