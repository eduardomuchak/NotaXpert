import {  NextPage, NextPageContext } from "next";
import { parseCookies } from "nookies";
import Router from "next/router";

export const withAuth = (
  WrappedComponent: NextPage<NextPage>,
  protectedRoute: boolean = true
) => {
  const Wrapper = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: NextPageContext) => {
    const { res } = ctx;
    const cookies = parseCookies(ctx);
    const sanofiToken = cookies["sanofi-token"];

    if (!sanofiToken && protectedRoute) {
      if (res) {
        res.writeHead(302, {
          Location: "/login",
        });
        res.end();
      } else {
        Router.push("/login");
      }
    }

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps };
  };

  return Wrapper;
};
