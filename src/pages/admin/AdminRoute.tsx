import React, { useCallback, useState, ReactElement } from "react";
import type { FC, ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { userService } from "../../services/api/user/user.service";
import {
  addUser,
  clearUser,
} from "../../redux-toolkit/reducers/user/user.reducer";
import useEffectOnce from "../../hooks/useEffectOnce";
import { ISignUpData } from "../../interfaces/auth/auth.interface";
import useLocalStorage from "../../hooks/useLocalStorage";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
}): ReactElement => {
  const { profile, token } = useAppSelector((state) => state.user);
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userStorage = useLocalStorage<ISignUpData>("user");

  const user = userStorage.get();

  const checkUser = useCallback(async (): Promise<void> => {
    try {
      const response = await userService.checkCurrentUser();
      setTokenIsValid(true);
      dispatch(
        addUser({
          token: response.data.token,
          profile: response.data.user,
        })
      );
    } catch (error) {
      setTokenIsValid(false);
      setTimeout(async () => {
        dispatch(clearUser());
        await userService.logoutUser();
        navigate("/");
      }, 1000);
    }
  }, [dispatch, navigate]);

  useEffectOnce(() => {
    checkUser();
  });

  if (user || (profile && token)) {
    if (!tokenIsValid) {
      return <></>;
    } else {
      return <>{children}</>;
    }
  } else {
    return <>{<Navigate to="/" />}</>;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
