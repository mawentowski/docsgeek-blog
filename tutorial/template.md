---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
title: Adding new posts in AstroPaper theme
postSlug: adding-new-posts-in-astropaper-theme
featured: true
draft: true
tags:
  - docs
ogImage: ""
description:
  Some rules & recommendations for creating or adding new posts using AstroPaper
  theme.
---

Here are some rules/recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

## Frontmatter

Frontmatter is the main place to store some important information about the post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in [astro documentation](https://docs.astro.build/en/guides/markdown-content/).

Here is the list of frontmatter property for each post.

| Property           | Description                                                                     | Remark                                        |
| ------------------ | ------------------------------------------------------------------------------- | --------------------------------------------- |
| **_title_**        | Title of the post. (h1)                                                         | required<sup>\*</sup>                         |
| **_description_**  | Description of the post. Used in post excerpt and site description of the post. | required<sup>\*</sup>                         |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                          | required<sup>\*</sup>                         |
| **_author_**       | Author of the post.                                                             | default = SITE.author                         |
| **_postSlug_**     | Slug for the post. Will automatically be slugified.                             | default = slugified title                     |
| **_featured_**     | Whether or not display this post in featured section of home page               | default = false                               |
| **_draft_**        | Mark this post 'unpublished'.                                                   | default = false                               |
| **_tags_**         | Related keywords for this post. Written in array yaml format.                   | default = others                              |
| **_ogImage_**      | OG image of the post. Useful for social media sharing and SEO.                  | default = SITE.ogImage or generated SVG image |
| **_canonicalURL_** | Canonical URL (absolute), in case the article already exists on other source.   | default = `Astro.site` + `Astro.url.pathname` |

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.

`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` needs to be separated with `-` or `_` but `-` is recommended. However, even if you don't write the correct slug, AstroPaper will automatically slugify your incorrect slug. If slug is not specified, the slugified title of the post will be used as slug.

If you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `/src/content/_schemas.ts` file.

```ts
// src/contents/_schemas.ts
export const blogSchema = z.object({
  // ---
  // replace "others" with whatever you want
  tags: z.array(z.string()).default(["others"]),
  ogImage: z.string().optional(),
  description: z.string(),
});
```

### Sample Frontmatter

Here is the sample frontmatter for a post.

```yaml
# src/contents/sample-post.md
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
postSlug: the-title-of-the-post
featured: true
draft: true
tags:
  - some
  - example
  - tags
ogImage: ""
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

## Adding table of contents

By default, a post (article) does not include any table of contents (toc). To include toc, you have to specify it in a specific way.

Write `Table of contents` in h2 format (## in markdown) and place it where you want it to be appeared on the post.

For instance, if you want to place your table of contents just under the intro paragraph (like I usually do), you can do that in the following way.

```md
---
# some frontmatter
---

Here are some recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

<!-- the rest of the post -->
```

## Headings

There's one thing to note about headings. The AstroPaper blog posts use title (title in the frontmatter) as the main heading of the post. Therefore, the rest of the heading in the post should be using h2 \~ h6.

This rule is not mandatory, but highly recommended for visual, accessibility and SEO purposes.

## Bonus

### Image compression

When you put images in the blog post, it is recommended that the image is compressed. This will affect the overall performance of the website.

My recommendation for image compression sites.

- [TinyPng](https://tinypng.com/)
- [TinyJPG](https://tinyjpg.com/)

### OG Image

The default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is **_1200 X 640_** px.

> Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out [the announcement](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).






## Tools

### Text Editors over Help authoring tools

Unlike other forms of technical writing, API documentation is usually written using text edtiors, as opposed to Help authoring tools or knowledge bases. 




Text editors are preferred in a Docs-as-Code (DaC) workflow for several compelling reasons. First, they seamlessly integrate with Git, facilitating the tracking of changes and promoting collaboration among team members (1). Moreover, text editors simplify Markdown formatting, which is a widely used markup language for documentation (2). Their lightweight and platform-independent nature make them accessible and easy to work with, enabling documentation efforts across different operating systems (3). Developers find text editors familiar and comfortable to use, making them an ideal choice for collaboration within technical teams (4). These editors offer extensive customization options, allowing users to tailor their workflow to specific needs (5). They are also well-suited for embedding and formatting code within documentation, essential for technical content (6). Additionally, text editors enable offline editing, ensuring productivity even without an internet connection (7). The use of Markdown in text editors ensures document portability and avoids vendor lock-in (8). Some text editors support real-time collaborative editing, enhancing teamwork (9). Lastly, many text editors are open-source or available at a low cost, making them a cost-effective choice for documentation projects (10).

### Git Hosting Platforms over CMSs

Git hosting platforms like GitHub are preferred over traditional content management systems for documentation because they offer:

Git platforms are highly advantageous for documentation purposes due to several key reasons. They provide robust version tracking and collaboration capabilities, ensuring that document revisions are well-managed (1). These platforms align seamlessly with developer workflows, making them a preferred choice within technical teams (2). Real-time collaboration is facilitated, enabling multiple contributors to work on documentation concurrently (3). Git platforms excel in the management of document versions, offering seamless branching and merging options (4). They boast thriving communities and open-source alternatives, fostering knowledge sharing and collaboration (5). Integration with CI/CD pipelines automates various processes, streamlining documentation workflows (6). Using plain text or Markdown in Git platforms ensures easy versioning, simplifying content management (7). Effortless inclusion of code snippets enhances the documentation of technical aspects (8). Simplified contribution processes encourage community involvement (9). Git platforms offer reliable and scalable hosting options, ensuring the accessibility and stability of documentation (10). Worldwide access to documentation is guaranteed, making it globally accessible (11). Many Git platforms provide free and affordable pricing options, ensuring cost-effectiveness (12). Powerful search capabilities enhance document discoverability, facilitating efficient information retrieval (13). In summary, Git platforms excel in creating collaborative, developer-friendly, and version-controlled documentation.

### API testing tools

API-specific tools are designed to simplify the process of documenting APIs. They are indispensable for API technical writers because:

1. **Postman**:

   - Postman is a popular tool for testing APIs. Tech writers are often ask to organize API calls, grouping them effectively, and providing clear descriptions.

2. **Swagger (OpenAPI)**:

   - Swagger, or the OpenAPI Specification, is essential for documenting RESTful APIs. Tech writers may be tasked with backfilling empty OpenAPI spec definitions or creating a styleguide for describing fields.

3. **cURL**:
   - cURL is a command-line tool for making HTTP requests. Tech writers should learn cURL as it helps them test APIs and helps them become familiar with issuing CLI commands.

### Natural-language processers (i.e. ChatGPT)

NLP models like ChatGPT can help you structure your documentation (outline) and create first drafts of contnt. They can also assist in translating complex technical jargon into plain language.

## Domain Knowledge

In many cases, domain knowledge can be a significant advantage in API technical writing. Having expertise in the industry or technology domain you're documenting can lead to more accurate and user-friendly documentation. The API domain includes the underlying business processes that govern the API and is important to understanding and guiding the user journey.

For example, if you're documenting mobile development APIs, having experience in mobile app development can greatly enhance the quality of your documentation. Or, for a payment processing API, understanding how online payments work will help you write tutorials and create diagrams.

Furthermore, oftentimes tech writers are asked to backfill empty OpenAPI spec definitions which requires domain knowledge.

If you lack domain knowledge, don't worry. You can acquire it over time by engaging in online communities, attending industry events, and learning from subject matter experts.

## Conclusion

In conclusion, while coding skills can be advantageous in API technical writing, they are not always mandatory. The essential skills for this role include a solid understanding of API fundamentals, knowledge of documentation strategies, familiarity with key tools, and the ability to adapt to your specific organization's needs.

API technical writing is a rewarding career that offers the opportunity to work at the intersection of technology and communication. Whether you're already a coder or looking to transition into this field, there's a place for you in the world of API documentation. Continuously improve your skills, stay curious, and embrace the evolving landscape of API technology. Your role as a bridge between developers and end-users is essential in ensuring that APIs are effectively understood and utilized in the digital age.

## Additional Resources

For further learning and development in API technical writing, consider exploring online courses, tutorials, and communities dedicated to API documentation. Networking with professionals in the field and attending industry events can also be valuable steps in advancing your career in API documentation.




## community support

Join https://www.writethedocs.org/ slack chanel

theres a jobs sectio




- [API Technical Writing: The Essential Skills You Need](#api-technical-writing-the-essential-skills-you-need)
  - [Grasp API fundamentrals](#grasp-api-fundamentrals)
  - [Create an Open API spec](#create-an-open-api-spec)
  - [Be able to read a Swagger document](#be-able-to-read-a-swagger-document)
  - [Adopt a docs-as-code mindset](#adopt-a-docs-as-code-mindset)
  - [Switch to Markdown](#switch-to-markdown)
  - [Author content in text editors](#author-content-in-text-editors)
  - [Learn CLI commands](#learn-cli-commands)
  - [Use Git for version control](#use-git-for-version-control)
    - [Learn a Git hosting platform](#learn-a-git-hosting-platform)
  - [Style documentation using CSS](#style-documentation-using-css)
  - [Learn a programming language](#learn-a-programming-language)
  - [Practice validating API behavior](#practice-validating-api-behavior)
  - [Create sample apps to visualize API responses](#create-sample-apps-to-visualize-api-responses)
  - [Get community support](#get-community-support)
  - [In conclusion](#in-conclusion)



Docs

- [API Technical Writing: The Essential Skills You Need](#api-technical-writing-the-essential-skills-you-need)

API fundamentrals
  - [Grasp API fundamentrals](#grasp-api-fundamentrals)
  - [Learn the Open API spec](#learn-the-open-api-spec)

Auhtoring tools
  - [Switch to Markdown](#switch-to-markdown)
  - [Author content in text editors](#author-content-in-text-editors)
  - [Learn CLI commands](#learn-cli-commands)

Collaboration and version control
  - [Use Git for version control](#use-git-for-version-control)
  - [Learn a Git hosting platform](#learn-a-git-hosting-platform)

API testing:
  - [Practice sending API requests with Postman](#practice-sending-api-requests-with-postman)
  - Learn to send requests using cURL
  - [Practice validating API behavior](#practice-validating-api-behavior)
  - [Create sample apps to visualize API responses](#create-sample-apps-to-visualize-api-responses)

Coding:
  - frontend development
  - [Style documentation using CSS](#style-documentation-using-css)
  - [Learn a programming language](#learn-a-programming-language)

Extra credit

- [Specialize in a domain](#specialize-in-a-domain)
- [Get community support](#get-community-support)

[In conclusion](#in-conclusion)



API documentation platforms:


