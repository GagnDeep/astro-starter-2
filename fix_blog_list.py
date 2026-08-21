import re
import os

def fix_blog_list():
    path = "src/components/blog/list.astro"
    if os.path.exists(path):
        with open(path, 'w') as f:
            f.write("""---
import PostSummary from "./summary.astro";
import type { CollectionEntry } from "astro:content";

type Props = {
  posts: CollectionEntry<"blog">[];
};

const { posts } = Astro.props;
---

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
  {posts.map((post, i) => <PostSummary {...post} key={i} loading={i < 3 ? "eager" : "lazy"} />)}
</div>
""")

fix_blog_list()
