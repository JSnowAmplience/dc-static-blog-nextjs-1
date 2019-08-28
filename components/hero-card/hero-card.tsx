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
    const blogLink = `/blog/${blogPost.urlSlug}/${blogPost.id}`;
    return (
      <>
        <section>
          <StaticLink as={blogLink} href="/blog/[slug]/[blog-id]">
            <article>
              <div className="blog-card-image">
                <Image
                  {...{
                    ...blogPost.image,
                    dynamicImagingOptions: [{ w: 324 }, { w: 476 }, { w: 684 }, { w: 1000 }]
                  }}
                />
              </div>
              <div className="blog-card-content">
                <h1>{blogPost.title}</h1>
                <BlogCardMeta authors={blogPost.authors} publishedDate={blogPost.date} />
                <p>{blogPost.description}</p>
              </div>
            </article>
          </StaticLink>
        </section>
        <style jsx>{`
        article {
          width: 31%;
          display: flex;
          flex-direction: row;
          box-shadow: 0 6px 12px 2px ${theme.colors.black08};
          background: white;
          cursor: pointer;
          height: 400px;
        }
        
        p {
          font-size: 1.1rem;
        }

        article:hover {
          box-shadow: 0 6px 12px 2px ${theme.colors.black25};
        }
        
        .blog-card-image :global(img) {
          height: 120px;
          max-height: 120px;
          object-fit: cover;
        }
        
        .blog-card-content {
          padding 0 20px 20px 20px;
        }

        h1 {
          font-size: ${theme.fonts.size.xLarge};
          color: ${theme.colors.mineShaft};
        }

        p {
          color: ${theme.colors.doveGray};
        }
        
        section {
          display: flex;
          flex-wrap: wrap;
          margin: auto;
          margin-top: 40px;
          max-width: ${theme.layout.widePageWidth};
        }

        @media (max-width: ${theme.layout.widePageWidth}) {
          section {
            max-width: 100%;
            padding: 0 20px;
          }

          article {
            margin-bottom: 55px;
          }
        }
        
        @media (max-width: ${theme.layout.narrowPageWidth}) {
          article {
            width: 100%;
            flex: initial;
            flex-direction: column;
            box-shadow: unset;
          }
          section {
            display: block;
            padding: 0 45px;
          }
        }
        
        @media (min-width: ${theme.layout.narrowPageWidth}) {
          article {
            flex: 1 1 0;
            font-size: ${theme.fonts.size.normal};
          }
          .blog-card-image {
            height: 100%;
            width: 100%;
            max-width: 31%;
            flex-grow: 1;
          }
          .blog-card-image :global(img) {
            height: 100%;
            max-height: none;
          }
        }

      `}</style>
      </>
    );
  }
};

export default HeroCard;
