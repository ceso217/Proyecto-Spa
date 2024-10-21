"use client";
import PropTypes from "prop-types";
import { SessionProvider } from "next-auth/react";

function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
