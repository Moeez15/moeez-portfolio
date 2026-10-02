export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  content: string;
  readingMinutes: number;
};

export type CommentsConfig = {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
};
