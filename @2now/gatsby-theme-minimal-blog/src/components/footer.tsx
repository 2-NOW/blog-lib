/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        by
        {` `}
        <Link
          aria-label="Link to the author's github"
          href="https://github.com/2-NOW"
        >
          2-NOW
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
