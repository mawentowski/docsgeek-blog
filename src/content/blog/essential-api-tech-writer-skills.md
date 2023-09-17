---
author: Mark Wentowski
pubDatetime: 2023-09-17T15:33:00Z
title: Essential API technical writing skills
postSlug: essential-api-tech-writer-skills
featured: true
draft: false
tags:
  - docs-as-code
  - apidocumentation
ogImage: "apitechwriting_og.png"
description: Many transitioning technical writers wonder if coding is necessary for API tech writing. While the extent of coding knowledge varies by role, this article explores essential skills, from API fundamentals to technical proficiency and tools.
---

One common question for technical writers transitioning from UI writing to API documentation is, do I need to be a coder to land an API tech writing job? In general, API technical writing depends on a higher level of technical proficiency on the writer's part than writing for user interfaces. While the degree of programming knowledge depends on the role, there are skills and tools common across gigs that can guide what you need to learn to be successful at API tech writing.

This article explores the essential skills required for success in this role, breaking it down into API fundamentals and then exploring the various technical skills and tools.

## Table of contents

## Grasp API fundamentals

At the core of API technical writing is a deep understanding of [what APIs are](https://document360.com/blog/what-is-rest-api/) and their role in modern software development.

### Understand HTTP methods/codes

Familiarize yourself with HTTP methods (GET, POST, PUT, DELETE) and HTTP status codes (e.g., 200 OK, 404 Not Found). This knowledge forms the foundation for describing API endpoints and documenting API responses and errors.

### Learn about authentication and authorization

Knowing how authentication and authorization mechanisms work, such as OAuth, API keys, and tokens, is crucial for writing the Getting Started sections to guide developers through retrieving an API key, using the API key to authenticate requests, and making their first API call.

### Be fluent in the Open API spec

A Swagger document is generated based on an API's OpenAPI specification, encoded as JSON/YAML, that describes an API's endpoints, HTTP methods, parameters, and schemas. It is a standardized format for documenting and describing RESTful APIs that API documentation tools use to generate API reference documentation (i.e., a Swagger-like web page).

One way to familiarize yourself with the spec's YAML/JSON structure is to practice editing field descriptions in the [Swagger editor](https://editor.swagger.io/), which allows you to make edits to the Swagger Petstore specification and view the generated documentation.

In the future, if you are participating in [spec-first](https://document360.com/blog/api-first-approach/) development, you may be asked to create the OpenAPI specification, collaborating with developers to define the API's structure, which requires an in-depth knowledge of OpenAPI's YAML/JSON format.

## Adopt the 'Docs as Code' approach

Many API developers adopt the [Docs as Code](https://www.writethedocs.org/guide/docs-as-code/) approach to authoring content and collaborating with team members. It's a methodology and approach to documentation that treats documentation like software developers treat their code.

### Switch to Markdown

Instead of using proprietary or binary formats, Docs as Code promotes using plain text formats, most commonly Markdown. These formats are lightweight, human-readable, and easily understood by technical writers and developers.

Markdown is a simple markup language to learn. See the [Markdown official docs](https://www.markdownguide.org/basic-syntax/) for more details.

### Author content in text editors

Docs as Code works best using text editors over help authoring tools (HATs) or knowledge base software because they are lightweight, integrate with Git, offer linting, and, most importantly, are tools developers use.

While various text editors are available, one of the most popular choices among developers and technical writers is [Visual Studio Code](https://code.visualstudio.com/).

### Get comfy with CLI commands

CLI stands for command-line interface and provides a way of interacting with your local machine's file system using commands rather than navigating folders. For Mac, that means using an app like Terminal, or for Windows, the Command Prompt.

It's essential to learn basic commands, such as navigating the file system, working with files and directories, managing permissions, and installing packages to set up and configure documentation sites, sample apps, databases, and libraries accompanying an API.

In addition, you'll want to learn how to generate an SSH key pair and use an SSH agent to provide your private keys to SSH clients. SSH is the preferred way of connecting to code bases, such as those on GitHub, and is especially important for securely connecting to private code bases and servers.

### Experiment with static site generators

Static site generators (SSGs) generate static HTML files from source files, often written in markup languages like Markdown, templates, and configuration files. These static HTML files can be deployed to web servers, content delivery networks (CDNs), or hosting platforms, making it easy to publish and maintain websites, including documentation.

While configuring these sites from the ground up is usually a developer task, you'll need to know how to configure projects (usually using YAML config files) and style the output using CSS.

Popular static site generators include [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), and [Astro](https://astro.build/).

### Leverage AI to write drafts

Natural language processors (NLPs) like [ChatGPT](https://chat.openai.com/) can help you structure your documentation and create first drafts of content. They can also assist in translating complex technical jargon into plain language.

## Collaboration and version control

Using the version control system, Git allows tech writers to collaborate with developers on projects, track changes, and manage versions of a codebase or any text-based content.

You'll need to know how to clone repositories, commit/push changes, and make pull requests to collaborate with developers.

While using tools visual tools like Sourcetree is convenient, learning the Git CLI commands helps you understand Git fundamentals better. It gives you experience using the CLI, which benefits other areas.

A great resource to learn about the different ways to use Git is LinkORB's article [Learn about Git standards and processes](https://engineering.linkorb.com/topics/git/articles/git-workflow/).

Git hosting platforms like [GitHub](https://github.com/) are preferred over traditional content management systems (CMSs) because they provide version tracking, facilitate collaboration and interact with existing developer tooling and workflows.

## Learn a programming language

Job postings for API technical writers often say, 'familiarity with at least one programming language required.' 'Familiarity' is the keyword and implies 'working knowledge' of a programming language and general programming concepts -- not being an 'expert' developer.

JavaScript is beneficial to learn since you can quickly build user interfaces that visualize API data. Python is another good choice because it is a simple and helpful language.

Since you'll likely need to read code samples in more than one language, knowing the foundations of programming languages, such as functions/methods, data types, variables, operations, loops, and functions/methods, is helpful.

## API Testing

API testing tools allow tech writers to interact with and test APIs hands-on like a developer and are essential to creating accurate documentation.

### Organize API requests with Postman

[Postman](https://www.postman.com/) is a popular tool for testing APIs. A tech writer's common task is organizing API calls, grouping them effectively, and providing clear descriptions. It starts by importing an Open API specification and grouping related requests into collections. Collections are like folders for organizing requests based on functionality or use cases and help you keep requests structured and easy to find.

Check out [Postman's docs](https://learning.postman.com/docs/introduction/overview/) for tips and best practices.

### Practice validating API behavior

You can use API testing tools like Postman to make API requests, inspect responses, and troubleshoot issues. However, the ability to use browser developer tools and browser consoles for testing APIs directly in a web browser is a valuable skill since it allows you to take the role of the developer creating an app that utilizes the API.

The following is a simple example of a JavaScript web app.

- **Making API Requests**: You can use JavaScript in the browser console to make API requests and examine the responses, helping you quickly verify that the API is functioning as expected.

```javascript
fetch("https://api.example.com/user/123")
  .then(response => response.json())
  .then(data => console.log(data));
```

- **Debugging and Troubleshooting**: Browser consoles provide debugging tools that help you identify and resolve issues with API requests, such as incorrect parameters or unexpected responses.

### Create sample apps to visualize API responses

You can create simple web pages that can display API responses in a structured and user-friendly manner. Knowing HTML is beneficial when you need to demonstrate how API data is structured or provide examples of using the API. For example, create a simple web app that fetches data from a REST API and dynamically displays that data on the web page:

```html
<div>
  <h1>User Profile</h1>
  <p>Name: {{ username }}</p>
  <p>Email: {{ email }}</p>
</div>
```

## Extra credit

### Specialize in a domain

In many cases, domain knowledge can be a significant advantage in API technical writing. Expertise in the industry or technology domain you're documenting can lead to more accurate and user-friendly documentation. The API domain includes the underlying business processes that govern the API and is vital to understanding and guiding the user journey.

For example, if you're documenting mobile development APIs, having experience in mobile app development can significantly enhance the quality of your documentation. Or, for a payment processing API, understanding how online payments work will help you write tutorials and create diagrams.

Furthermore, as an API tech writer, you may need to backfill empty OpenAPI spec definitions, which requires domain knowledge.

If you need domain knowledge, don't worry. You can acquire it over time by engaging in online communities, attending industry events, and learning from subject matter experts.

### Get community support

The [Write The Docs slack channel](https://www.writethedocs.org/slack/) is a great way to post questions, share ideas, network with fellow technical writers, and discover job opportunities.

## In conclusion

Transitioning from UI technical writing to API technical writing may seem challenging. However, by embracing the tools and processes used by API technical writers, you can build the skills necessary for success in this dynamic field.

Remember that the key to thriving in this role is continuous improvement. Stay curious, adapt to the ever-evolving API technology landscape, and embrace your vital role as a bridge between developers and end-users.
