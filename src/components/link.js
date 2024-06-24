
import { jsx, Link as A } from "theme-ui";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";


export function NavLink({ path, isScroll,label, children, ...rest }) {
  

  return (
    <div>
      {isScroll ? (
        <ScrollLink
          to={path}
          spy={true}
          offset={-70}
          smooth={true}
          duration={500}
          className="nav-item"
          activeClass="active"
          {...rest}
        >
          {label}
        </ScrollLink>
      ) : (
        <NextLink href={path} passHref className="nav-item">
          {label}
        </NextLink>
      )}
    </div>
  );
}

export function NormalLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path} passHref>
      {children ? children : label}
    </NextLink>
  );
}
