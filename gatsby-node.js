/*
 * Copyright(c) 2020
 *
 * @author Indrajith C
 *
 *
 */

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  }
`;

  /**
   * Paginated pages for posts
   */

  const postPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({
    length: numPages
  }).forEach(_, index) => {
    actions.createPages({
      path: index === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1
      }
    })
  }

  /**
   * Single post page
   */

  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.frontmatter.id;
    actions.createPages({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: {
        id
      }
    })
  });
};
