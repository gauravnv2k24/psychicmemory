// each page has a title and a url
type Page = {
  title: string;
  url: string;
};

// pages for navigation in navbar part
// should be added here
// follow this format :=> url: blogs/topic/<topic-name>
export const Pages: Page[] = [
  {
    title: "Technology",
    url: "blogs/topic/technology",
  },
  {
    title: "Programming",
    url: "blogs/topic/programming",
  },
  {
    title: "Trending",
    url: "blogs/topic/trending",
  },
  {
    title: "Research",
    url: "blogs/topic/reearch",
  },
  {
    title: "Project Ideas",
    url: "blogs/topic/project-ideas",
  },
];
