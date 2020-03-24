import React, { Component } from 'react'

// import { isAuthValid } from '../helpers/identityHandler';


// a hoc component that is very useful to check if user is logged in or not
export default function withAuth(WrappedComponent) {
  return class Authenticated extends Component {

  //   static async getInitialProps({ req, res }) {
  //     if (typeof window === 'undefined' && !isAuthValid(req)) {
  //       return res.redirect('/identity/login')
  //     }

  //     // Check if Page has a `getInitialProps`; if so, call it.
  //     const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx);
  //     // Return props.
  //     return {
  //       ...pageProps,
  //     }
  //   }
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}
