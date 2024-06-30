
import { jsx, Link as A } from "theme-ui";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";


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
          activeClass="active"
          {...rest}
        >
          {label}
        </ScrollLink>
      ) : (
        <Link href={path} passHref>
          {label}
        </Link>
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
