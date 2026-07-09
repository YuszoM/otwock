export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  draft: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};
