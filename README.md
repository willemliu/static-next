# static-next

This project showcases the differences between the rendering strategies provided by Next.js.

The strategies involves data-fetching implementations in:

-   getInitialProps
-   getServerSideProps
-   getStaticProps
-   getStaticPaths
-   useEffect

Static-site-generation is achieved using `getStaticProps` and `getStaticPaths`. Vercel provides `Deploy Hooks` feature to allow a regeneration of the site upon calling the webhook. This can be done from within the [demo](https://static-next.willemliu.now.sh) itself.
