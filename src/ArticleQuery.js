export default query = `
query {
  allArticles {
    edges {
      node {
        slug
        title
        body
        tags {
          name
          slug
        }
        thumbnail
        published_at
        updated_at
      }
    }
  }
}`