'use client';

import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { user, checked } = useSelector((state) => state.auth);

  if (!checked) {
    return null;
  }

  return user ? children : null;
}
