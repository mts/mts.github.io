import React, { useEffect } from 'react'
import { container1, container1BlogList } from './BlogMain.scss'
import { H2, BlogItemFeatured, BlogItemRegular } from './BlogMain.part'
import { blogMainDefaultProps, blogMainPropTypes } from './BlogMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../../../asset/image/blog'

export function BlogMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }}>
      <div className={container1}>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/recent" text="Recent articles" />
          <BlogItemFeatured imageName="blog-1-0" image={image1.Blog10} href="/react-libraries" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-1-1" image={image1.Blog11} href="/conditional-rendering-react" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-1-2" image={image1.Blog12} href="/react-event-handler" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-1-3" image={image1.Blog13} href="/javascript-import-export" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/starter" text="Getting Started Tutorials" />
          <BlogItemFeatured imageName="blog-2-0" image={image2.Blog20} href="/node-js-express-tutorial" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-2-1" image={image2.Blog21} href="/learn-react-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-2-2" image={image2.Blog22} href="/react-redux-tutorial" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-2-3"
              image={image2.Blog23}
              href="/complete-firebase-authentication-react-tutorial"
              title="Lorem ipsum"
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/firebase" text="Firebase" />
          <BlogItemFeatured imageName="blog-3-0" image={image3.Blog30} href="/firebase-test" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-3-1" image={image3.Blog31} href="/react-firebase-redux-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-3-2" image={image3.Blog32} href="/react-firebase-mobx-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-3-3" image={image3.Blog33} href="/the-road-to-react-with-firebase-book" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/tooling" text="Tooling" />
          <BlogItemFeatured imageName="blog-4-0" image={image4.Blog40} href="/babel-module-resolver-jest" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-4-1" image={image4.Blog41} href="/babel-module-resolver-typescript" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-4-2" image={image4.Blog42} href="/npm-crash-course" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-4-3" image={image4.Blog43} href="/webpack-code-splitting-library" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/react" text="React" />
          <BlogItemFeatured imageName="blog-5-0" image={image5.Blog50} href="/react-libraries" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-5-1" image={image5.Blog51} href="/conditional-rendering-react" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-5-2" image={image5.Blog52} href="/react-event-handler" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-5-3" image={image5.Blog53} href="/react-range" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/javascript" text="JavaScript" />
          <BlogItemFeatured imageName="blog-6-0" image={image6.Blog60} href="/javascript-import-export" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-6-1" image={image6.Blog61} href="/npm-crash-course" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-6-2" image={image6.Blog62} href="/javascript-variable" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-6-3" image={image6.Blog63} href="/webpack-code-splitting-library" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/node" text="Node" />
          <BlogItemFeatured imageName="blog-7-0" image={image7.Blog70} href="/npm-crash-course" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-7-1" image={image7.Blog71} href="/webpack-code-splitting-library" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-7-2" image={image7.Blog72} href="/github-webhook-node-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-7-3" image={image7.Blog73} href="/minimal-node-js-babel-setup" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/web-development" text="Web Development" />
          <BlogItemFeatured imageName="blog-8-0" image={image8.Blog80} href="/npm-crash-course" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-8-1" image={image8.Blog81} href="/github-webhook-node-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-8-2" image={image8.Blog82} href="/babel-module-resolver" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-8-3" image={image8.Blog83} href="/git-team-workflow" title="Lorem ipsum" />
          </div>
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
