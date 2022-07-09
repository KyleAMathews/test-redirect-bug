// Generally you create redirects while creating pages.
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/old-url', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/old-url2', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/old-url3', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/old-url4', toPath: '/', isPermanent: true })
  // Create pages here
}
