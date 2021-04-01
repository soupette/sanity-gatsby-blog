export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6065f343e65b6600a3d77fc1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gt18eufp",
                  apiId: "d0e6eae3-6640-486b-8c7c-ea12d44e74e4",
                },
                {
                  buildHookId: "6065f343cc8e950086734cd8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9supg9bc",
                  apiId: "c298b034-6fcf-4012-a197-42bc9b84e335",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/soupette/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9supg9bc.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
