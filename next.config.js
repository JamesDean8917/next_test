module.exports = {
    async redirects() {
      return [
        {
          source: '/bye',
          destination: '/hello',
          permanent: true,
        },
      ]
    },
  }