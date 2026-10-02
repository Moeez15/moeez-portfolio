import type { CommentsConfig } from './types';

export function getCommentsConfig(): CommentsConfig | null {
  const repo = process.env.GISCUS_REPO;
  const repoId = process.env.GISCUS_REPO_ID;
  const category = process.env.GISCUS_CATEGORY;
  const categoryId = process.env.GISCUS_CATEGORY_ID;
  if (!repo || !repoId || !category || !categoryId) return null;
  return { repo, repoId, category, categoryId };
}
