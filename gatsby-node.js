// Generally you create redirects while creating pages.
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/old-url', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/old-url2', toPath: '/', isPermanent: true })
  // Create pages here
}
