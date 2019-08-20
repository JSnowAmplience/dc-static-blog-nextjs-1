import Link from 'next/link';
import Image from '../images/image.component';
import BlogPost from '../../common/interfaces/blog-post.interface';
import theme from '../../common/styles/default/theme';
import BlogCardMeta from '../blog-card-meta/blog-card-meta';

interface HeroCardProps {
  blogPost: BlogPost;
}

const HeroCard = ({ blogPost }: HeroCardProps) => {
  const blogLink = `/blogs/${blogPost.urlSlug}/${blogPost.id}`;
  return (
    <>
      <section>
        <Link href={blogLink}>
          <article>
            <div className="blog-card-image">
              <Image {...blogPost.image} />
            </div>
            <div className="blog-card-content">
              <h1>{blogPost.title}</h1>
              <BlogCardMeta authors={blogPost.authors} publishedDate={blogPost.date} />
              <p>{blogPost.description}</p>
            </div>
          </article>
        </Link>
      </section>
      <style jsx>{`
        article {
          width: 31%;
          display: flex;
          flex-direction: row;
          margin-bottom: 36px;
          box-shadow: 0 6px 12px 2px ${theme.colors.shadowLight};
          background: white;
          cursor: pointer;
          min-height: 326px;
        }
        
        p {
          font-size: 1.1rem;
        }

        article:hover {
          box-shadow: 0 6px 12px 2px ${theme.colors.shadowDark};
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
          font-size: 1.1rem;
        }
        
        section {
          display: flex;
          flex-wrap: wrap;
          margin: auto;
          margin-top: 40px;
          max-width: ${theme.layout.blogListWidth};
        }
        
        @media (max-width: ${theme.layout.blogListWidth}) {
          article {
            width: 100%;
            flex: initial;
            flex-direction: column;
          }
          section {
            display: block;
            padding: 0 20px;
          }
        }
        
        @media (min-width: ${theme.layout.blogListWidth}) {
          article {
            flex: 1 1 0;
            font-size: 16px;
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
};

export default HeroCard;
