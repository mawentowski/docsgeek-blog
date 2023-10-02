---
author: Mark Wentowski
pubDatetime: 2023-10-05T15:33:00Z
title: Documenting database schemas
postSlug: documenting-db-schemas
featured: true
draft: false
tags:
  - database
ogImage: "apitechwriting_og.png"
description: "Documenting database schemas can pose challenges, particularly for tech writers without direct database access. This article offers best practices and strategies to document database schemas effectively."
---

Database documentation ensures your data remains accessible, understandable, and secure. This article will delve into the critical aspects of documenting database objects, explore practical ways to describe a database schema and discuss various approaches to writing adequate schema documentation.

## Table of contents

## Understanding databases and schemas

Before we dive into the details, let's clarify some fundamental concepts:

- **Database**: It serves as a data repository, acting as a container for information.
- **Database schema**: The logical blueprint within the database that defines how data is organized and structured.

Tables are the primary database objects that store data in a tabular format. Each row in a table represents a single record or entity, while each column denotes an attribute or field of that record. In any given database, multiple schemas can provide different organizational methods for its components.

## Key Aspects of database documentation

Adequate documentation is the cornerstone of a well-managed database. Here are vital aspects to consider:

### 1. Comments and descriptions

Most modern relational database management systems (RDBMS) allow you to add comments or descriptions to various database objects, providing context, explanations, and usage notes.

### 2. Data dictionary tables

Some databases have dedicated tables or schemas where metadata and documentation about the database's structure are stored, including metadata for tables, columns, indexes, constraints, and more information.

### 3. Naming conventions

Clearly defined naming conventions for database objects ensure consistency, meaning, and understanding among users.

### 4. Data flow diagrams

For complex databases, data flow diagrams visually represent how data moves within the system, showing relationships between tables, views, and procedures.

### 5. Entity-relationship diagrams (ERDs)

ERDs provide graphical representations of the database schema, helping users visualize the structure and relationships between entities.

### 6. User guides

Detailed user guides or manuals instruct users on interacting with the database, executing queries, and utilizing stored procedures or views.

### 7. Data dictionary views

System views or catalog tables in some databases offer valuable metadata about database objects to include in the documentation.

### 8. Change logs

Maintaining change logs or version histories informs users about the database's evolution, documenting modifications and updates.

### 9. Access control and security guidelines

Incorporating information about user roles, permissions, and security guidelines ensures the secure and controlled use of the database.

### 10. Sample Queries and use cases

Providing sample SQL queries and use cases illustrates practical data retrieval and manipulation.

## Effectively describing a database schema

Let's explore adequate database schema documentation through an example:

### Example: Device management schema

Here's an example of external database schema documentation. This documentation effectively conveys vital points such as data meaning, relationships, business processes, user roles, usage, constraints, example values, data source, data evolution, and significant views.

<script src="https://gist.github.com/mawentowski/6bafd0ec899ebcb35aedc99bb0c8725b.js"></script>

The following key points make this schema documentation effective:

- **Data meaning**: This schema manages data related to both ultrasound procedures and the operational events of medical devices, with a particular emphasis on ultrasound machines.

- **Relationships**: This table establishes relationships with other tables, including the `ultrasound_procedures` table and potentially the `medical_devices` table. These relationships allow for correlations between ultrasound procedures and device events.

- **Business process**: The data directly relates to the healthcare facility's core operations, encompassing medical procedures and device management.

- **User roles**: The schema is relevant to medical personnel, maintenance teams, and administrative staff responsible for maintaining device health and managing procedure records.

- **Data usage**: The data serves multiple purposes, including procedure documentation, device maintenance, troubleshooting, and performance monitoring.

- **Constraints and validation**: Constraints are applied to ensure data integrity and maintain referential integrity for table relationships.

- **Example values**: Sample data values for `event_id`, `device_id`, `event_timestamp`, `event_type`, and `event_details` could be added to illustrate typical event log entries and their relevance.

- **Data source**: The data source includes ultrasound procedures conducted within the medical facility and event logs generated by medical devices.

- **Data evolution**: Over time, the schema accumulates records of ultrasound procedures and device events, providing historical insights into healthcare procedures and device performance.

- **Views**: Views such as `view_name_1` and `view_name_2` simplify data analysis and correlation between ultrasound procedures and device performance metrics, enhancing troubleshooting and maintenance efforts.

## Ways to Document Schemas

Now, let's discuss how to document database schemas effectively:

### Option 1: Annotate within the database

You can add comments or descriptions directly to database objects using SQL commands. This approach is suitable when only database designers or developers contribute to documentation.

For example, in PostgreSQL, you can add comments using the COMMENT command:

```sql
COMMENT ON SCHEMA public IS 'Main schema for application';
COMMENT ON TABLE customers IS 'Stores customer information';
COMMENT ON COLUMN customers.customer_id IS 'Unique identifier for customers';
```

### Option 2: Store metadata separately

Create tables within the database to store metadata and documentation about schemas, tables, and columns, allowing technical writers to maintain documentation independently.

Here's a simplified example in PostgreSQL:

```sql
CREATE TABLE metadata (
    table_name VARCHAR(255),
    column_name VARCHAR(255),
    description TEXT
);

```

### Option 3: Document externally

This method involves maintaining documentation outside the database, often in structured formats. While it provides flexibility, it can lead to inconsistencies if not synchronized with schema changes.

Here are the critical steps for external documentation:

1. **Choose a documentation format**: Select a format that suits your team's needs, such as plain text, Markdown, PDF, HTML, or specialized documentation tools.

2. **Structure the documentation**: Organize content logically, covering schema overview, tables, views, procedures, relationships, data dictionary, usage, security, and change history.

3. **Describe schema objects**: Provide comprehensive descriptions for each object, including purpose, columns, relationships, usage, constraints, and examples.

4. **Highlight key points**: Include a section summarizing critical aspects like data meaning, user roles, data source, and views.

5. **Include visuals (optional)**: Visual representations like entity-relationship diagrams can enhance understanding.

## Extra Credit: View documentation using SchemaCrawler

If you choose to document database objects within the database, tools like SchemaCrawler can help retrieve metadata and generate documentation.

To learn more about SchemaCrawler's capabilities as a database schema discovery tool, check out their website (https://www.schemacrawler.com/) as well as their excellent interactive tutorials on Killacoda at (https://killercoda.com/schemacrawler).

## Wrapping up

In conclusion, adequate database documentation ensures clarity, efficiency, and security. Whether you annotate within the database, store metadata separately, or document externally, the goal is to empower your team with the knowledge needed to manage and utilize the database effectively.

Start documenting today to guide your database journey and make it a valuable asset for your organization.
