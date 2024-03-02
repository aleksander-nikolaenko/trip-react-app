import { Navigate } from 'react-router';

interface Props {
  isAuth: boolean;
  redirect: string;
  children: JSX.Element;
}

export const PublicRoute = ({ isAuth, redirect, children }: Props) => {
  if (isAuth) {
    return (
      <Navigate
        to={redirect}
        replace
      />
    );
  }

  return children;
};
