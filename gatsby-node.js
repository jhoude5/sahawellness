const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
          
    `{
        teamBios: allContentfulBios {
            edges {
                node {
                    path
                }    
            }
        }
    }`
    );
if (result.errors) {
    throw result.errors;
}
  
const teamBios = result.data.teamBios.edges;
const BiosTemplate = require.resolve('./src/templates/bios.js');
teamBios.forEach((bio, index) => {
    createPage({
      path: `${bio.node.path}`,
      component: BiosTemplate,
      context: {
        pagePath: bio.node.path,
        title: bio.title,
      },
    });

});

}


