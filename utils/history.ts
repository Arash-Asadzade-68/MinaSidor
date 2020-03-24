import Router from 'next/router'

function forwardTo(location , status) {
    Router.push({
        pathname: location,
        query: { status: status },
      })
  }
export default forwardTo;