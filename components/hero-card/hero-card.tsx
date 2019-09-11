import Image from '../images/image.component';
import BlogPost from '../../common/interfaces/blog-post.interface';
import theme from '../../common/styles/default/theme';
import BlogCardMeta from '../blog-card-meta/blog-card-meta';
import StaticLink from '../static-link/static-link';

interface HeroCardProps {
  blogPost: BlogPost;
}

const HeroCard = ({ blogPost }: HeroCardProps) => {
  if (!blogPost) {
    return <div />;
  } else {
    const blogLink = `/blog/${encodeURIComponent(blogPost.urlSlug.toLowerCase())}`;
    return (
      <>
        <section>
          <StaticLink ariaLabel={blogPost.title} href={blogLink}>
            <article>
              <div className="blog-card-image">
                <Image
                  {...{
                    ...blogPost.image,
                    dynamicImagingOptions: [
                      { h: 140, w: 321, sm: 'c', scaleFit: 'poi' },
                      { h: 403, w: 330, sm: 'c', scaleFit: 'poi' }
                    ],
                    mediaQueryOptions: [
                      { mediaFeature: 'max-width', mediaSize: theme.layout.narrowPageWidth, containerSize: '321px' },
                      { mediaSize: '330px' }
                    ]
                  }}
                />
              </div>
              <div className="blog-card-content">
                <h1>{blogPost.title}</h1>
                <BlogCardMeta authors={blogPost.authors} publishedDate={blogPost.date} readTime={blogPost.readTime} />
                <p>{blogPost.description}</p>
              </div>
            </article>
          </StaticLink>
        </section>
        <style jsx>{`
        section {
          margin: auto;
          margin-top: 40px;
          max-width: ${theme.layout.widePageWidth};
        }
        
        article {
          width: 31%;
          flex: 1 1 0;
          font-size: ${theme.fonts.size.normal};
          display: flex;
          flex-direction: row;
          box-shadow: 0 20px 15px 2px ${theme.colors.black08};
          background: white;
          cursor: pointer;
          min-height: 400px;
        }
        
        p {
          font-size: ${theme.fonts.size.xLarge};
          color: ${theme.colors.doveGray};
          line-height: 1.875rem;
        }

        article:hover {
          box-shadow: 0 20px 15px 2px ${theme.colors.black25};
        }
        
        article:hover :global(.publish-date) {
          border-color: ${theme.colors.dustyGray};
        }
        
        article:hover h1, article:hover p, article:hover :global(.card-meta) {
          color: ${theme.colors.dustyGray};
        }
        
        .blog-card-image {
          width: 30%
        }
        
        .blog-card-image :global(img) {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        
        .blog-card-content {
          width: 70%;
          padding 0 20px 0 20px;
        }

        h1 {
          line-height: 2.8125rem;
          font-size: ${theme.fonts.size.xxxLarge};
          font-weight: ${theme.fonts.weight.medium};
          color: ${theme.colors.mineShaft};
        }
        
        article :global(.card-meta div) {
          font-size: ${theme.fonts.size.large};
        }

        article,
        h1,
        p,
        article :global(.card-meta) {
          transition-property: color, box-shadow;
          transition-duration: 0.3s;
        }

        @media (max-width: ${theme.layout.widePageWidth}) {
          section {
            max-width: 100%;
            padding: 0 20px;
            margin-bottom: 60px;
          }
        }
        
        @media (max-width: ${theme.layout.narrowPageWidth}) {
          article {
            width: 100%;
            flex: initial;
            flex-direction: column;
            box-shadow: unset;
            min-height: unset;
          }

          article:hover {
            box-shadow: unset;
          } 
          
          article :global(.card-meta div) {
            font-size: unset;
          }
          
          section {
            display: block;
            padding: 0 45px;
          }

          .blog-card-content {
            width: 100%;
          }
          
          h1 {
            font-size: ${theme.fonts.size.xxLarge};
            line-height: 1.875rem;
          }
          
          p {
            font-weight: ${theme.fonts.weight.regular};
            line-height: ${theme.fonts.size.xxLarge};
            font-size: unset;
          }
          
          .blog-card-image {
            width: unset;
          }
          
          .blog-card-content {
            width: unset;
            padding 15px;
          }
          
          .blog-card-image :global(img) {
            object-fit: cover;
            height: 135px;
          }
        }
        
        

      `}</style>
      </>
    );
  }
};

export default HeroCard;