---
author: Mark Wentowski
pubDatetime: 2023-11-24T21:16:00Z
title: "Breaking the mold: task-oriented API documentation"
postSlug: task-based-api-docs
featured: true
draft: false
tags:
  - apis
description: "Why API documentation should align with problem-solving rather than signal types."
---

The research paper [_How developers use API documentation - an observation study_](https://www.researchgate.net/publication/335456576_How_developers_use_API_documentation_an_observation_study) (Meng et al., August 2019) suggests that task-based documentation is more effective than documentation organized according to signal types, such as "concepts," "integrations," "samples," "cookbooks," or "API reference," as these signals are subjective, meaning different things to users.

The research highlights the importance of structuring documentation according to categories that reflect how developers use the API to solve specific problems rather than relying on arbitrary labels since developers found traditional signal types confusing.

In this blog post, I explore how to take a task-based approach that accommodates the needs of the different types of developers based on how they complete tasks.

## Table of contents

## Content signals in API docs

Before discussing the preferred task-based approach, let's attempt to define 'traditional' content categories so we have a baseline understanding to work with.

Standard signals in API docs include:

- **API reference** is a comprehensive document that provides detailed information about endpoints, parameters, request/response bodies, error handling, and other API components. Think "Swagger".
- **Concepts** are topics about domain models, business processes, and the general ecosystem that underlies how the API functions. For example, a 'how online payments work' article for a payment processing API.
- **Cookbooks** are step-by-step instructions for achieving specific API tasks or workflows.
- **Code samples** are short snippets of code that demonstrate specific API calls or functionalities. They are typically more focused on providing quick references and examples for developers to get started quickly. API references often integrate code samples showing how to execute requests in multiple programming languages.
- **Integrations** show how to connect two or more software systems using the API so they can exchange data. For example, integrating a CRM (Customer Relationship Management) system with an email marketing platform to sync customer data and automate marketing campaigns.

## The problem with content signals

Signal types are subjective to the user based on research and create confusion because they do not align with tasks the developer needs to accomplish. As technical writers, we may make the wrong assumption that people are familiar with content categories since we love templates.

For example, the term "API reference" confused some participants into thinking it comprehensively covered all aspects of the API.

Traditional content signals can lead to:

- different interpretations of a signal meaning
- overemphasis on documentation structure
- misalignment with user goals
- inefficient information retrieval
- navigation issues

According to the research paper [Principles and heuristics for designing minimalist instruction](https://www.ingentaconnect.com/content/stc/tc/1995/00000042/00000002/art00007) van der Meij, H., & Carroll, J. M. (1995), for the 'application of the principle of minimalist docs,' components of docs should reflect the task structure.

In laypeople's terms, you should organize information to match the problem they're trying to solve rather than using subjective content signals.

## Aligning API docs to developer habits

Now that we know why traditional content category signals are problematic, we need to understand the types of developers and their work habits to align our API docs with tasks.

One commonality between these different developers is that they spend roughly half the time reading and half coding when attempting to solve a specific task. How they spend their time depends on the type of developer they are.

The study recognizes the following developer types:

- **Systematic developers:** Top-down, carefully reads conceptual documentation, refers to previous information, and avoids needless mistakes. Correlated with more experience.
- **Opportunistic developers:** Bottom-up, starting with API reference docs foremost to figure out how to use the API without getting a holistic understanding. Willing to make frequent mistakes, often less experienced.
- **Pragmatic developers:** Some combination of the two.

So, to adopt a task-based docs strategy, we need a strategy that accommodates the work habits of systematic and opportunistic developers. If we focus on the extremes, we'll inadvertently cover pragmatic developers.

## Developing a Task-Based Strategy

### 'On-demand' concepts

We know systemic developers take the time to read about concepts, and the study's results indicated that doing so contributed to success in completing the tasks in general. They often read about concepts thoroughly and then refer to them when they become relevant to their assignment. On the other hand, opportunistic developers tended to skip concepts, and the study implies this may have been to their detriment.

Is the issue that opportunistic developers necessarily find reading about concepts a waste of time, or is it how the information is presented? The problem lies in how documentation presents concepts as gigantic, isolated topics removed from the context of the task the developer is trying to solve.

A strategy to appeal to both types of developers is to provide 'concepts on demand' intricately woven into task descriptions. This approach ensures that developers can access relevant conceptual information precisely when needed, providing a 'dose' of concepts when relevant. Systemic developers may want more information. No problem, provide a link to extended articles.

### Redundancy, finally a good thing

As a technical writer, and I believe many are like me, I wouldn't say I like redundancy in docs. I'd rather centrally locate content, then link to it when needed. I'm also in the camp that seeks to minimize or eliminate reuse, but that is a topic for another discussion.

I had to change my perception of redundancy to 'strategic redundancy,' which involves repeating information when it becomes relevant in a specific context, such as when completing a task. Redundancy highlights and builds upon critical pieces of content, ensuring that developers encounter key insights multiple times for reinforcement.

Analysis of the study indicated that the need to avoid redundancy created friction when developers encountered code samples with placeholders. The documentation had a series of steps, each with an updated code sample to reflect the latest step. Rather than incorporating the previous code samples into the newest code sample (supposed to be an updated version), the authors added placeholders, referencing code added in the code samples of earlier steps. Based on the outcome, we know that code samples/examples should be standalone and not include placeholders to facilitate easy copying. Redundancy is important, even if it increases content size and poses management challenges.

### Connect content to code

The study recommends establishing a clear connection between the content and actual code samples for both types of developers, most effectively side-by-side or in a one-after-the-other fashion. For example, you could present explanations in the left column while showing the corresponding code samples in the right column, demonstrating how to form an API request in a particular programming language.

Despite the potential effectiveness of this approach, opportunistic developers may still need to pay more attention to the explanations accompanying the code samples. The study suggests opportunistic developers are likelier to read code comments than content outside code samples. Code comments serve as quick, contextual insights, allowing developers to grasp the essentials without delving into extended documentation.

### Navigating tasks: a contextual approach

In the study, systematic developers, who adopt a top-down approach, revisited documentation while coding to refresh their memory. They struggled with navigating to information they encountered previously due to ineffective and confusing navigation. As a result, they viewed the documentation as incomplete when the content they were after existed _somewhere_ in the docs, outside of their awareness.

The study suggests implementing intuitive navigation elements, including a left navigation for navigating articles, a breadcrumb trail showing the current page's location, and 'right' navigation for navigating anchor tags on the current page. Good navigation ensures developers can quickly move back and forth, clearly understanding their current context.

Supported by intuitive navigation components, the present task provides context if you follow a task-based information architecture. No matter the user's location in the docs, they also know they are in some area within the task they are trying to accomplish.

### 'Task-aware' semantic search

A task-based approach to information architecture aligns well with semantic search techniques. Semantic search aims to understand the meaning behind a user's query. It provides more relevant and contextually accurate results than traditional keyword matching, ensuring developers can efficiently locate information pertinent to their current task.

Ideally, the search should be smart enough, for example, to infer the task the developer is trying to solve, considering the context they provide in their query, their location in the docs, metadata, and filters they have selected, etc., when returning search results.

Unfortunately, API documentation is notorious for having poor search, and many platforms cannot implement semantic search in the advanced way I suggest.

### When the search fails, provide a PDF

While this consideration was not part of the study, it is worth noting that many developers skip fancy search forms and instead prefer to search for answers using good ole `Ctrl+F`. This behavior may be a holdover from when static documents like PDFs and Word documents were the norm. Another reason is that developers are used to using shortcuts, in general, to be more efficient while programming.

Some developers may disregard the 'advanced' search entirely, possibly out of frustration when search results are irrelevant. To the developer who tried searching once and failed, the natural next step is to go back to basics, preferring to use`Ctrl+F` to wade through hundreds of instances of their search term on the present page rather than use advanced search.

`Ctrl+F` works well for long articles. However, if there are hundreds of articles, it becomes frustrating, leading to the face-in-palm question, "Can I get a PDF, please?".

If developers demand a PDF, it's time to look at why they prefer a PDF and then improve your website accordingly.

If your site needs a proper search, there is no harm in providing a PDF option.

### Longer pages vs. fragmentation

Many modern tech comm tools/platforms tend to fragment content that could otherwise be on the same page. Fragmentation, while not necessarily a problem, can compound issues such as confusing navigation and poor search.

When you fragment content into separate pages, context is lost when a user changes pages. As such, you cannot rely on the file/folder structure alone to indicate to the reader how pages are related. Even if you communicate how articles are connected, it raises questions such as, "How does this new page relate to the previous one?", or "do I need to read this new page, or is it optional?".

Consider longer, consolidated articles when organizing content, as these offer advantages over segmented and fragmented content.

Longer articles facilitate page search, something developers are used to using in one-page API reference sites, reducing the chance of navigation issues. Longer pages allow readers to follow a logical flow and grasp the complete concept. With effective headings and subheadings, it's easy to locate specific sections without extensive jumping between pages.

There's nothing wrong with fragmentation per se; it's just good practice to be conscious of how you split related topics to ensure it is clear how they are connected and avoid fragmentation if it is not necessary.

## Final Thoughts

Research indicates that task-based API documentation is more effective and appreciated than traditional content categories. The results have profound implications for the field of technical writing for APIs, challenging the prevalent paradigm of organizing documentation based on conventional categories.

The absence of a standard information architecture for API docs allows technical writers to tailor documentation for each project, emphasizing a task-oriented structure. While certain sections like the "Get Started" guide, account setup, and authentication may remain consistent, the flexibility invites technical writers to align documentation with user tasks rather than rigidly adhering to a predefined structure.

Furthermore, the task-based approach opens avenues for different content strategies catering to non-developer stakeholders. There is a significant gap in research regarding how non-developers, such as business stakeholders, interact with API documentation. Exploring these areas could provide valuable insights for creating documentation accommodating a broader audience.
