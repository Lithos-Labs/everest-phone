> Documentation rules and formatting.
## Formatting

This documentation is intended to remain readable and coherent throughout the whole duration of the project development and maintenance. Only a robust and cohesive structure will allow that.

### Folders

- Deep nesting should be avoided (max depth: 3)
- Folder names should be short and in lowercase
- All files should be inside of a folder except the root file ([[index]])

### Files

- File names should be short
- The first line of each file should start with a markdown quote and should contain a small description of the contents of the page.

### Headers
- Start at level 2 headers
- No more than level 3 headers, if more are needed, use another page or **bold** formatting.

### Date and time
Dates should be included where relevant and should follow the ISO 8601 standard and be inside curly braces.

>[!Example]
 (2025-05-11)

### External links
External links that refer to other websites should always be in the following format:

```
[title (domain.com)](URL)
```

Even though it increases verbosity, it also increases transparency whilst at the same time providing information about the page content.

>[!example]
 For instance this URL: 
> https://en.wikipedia.org/wiki/Cat 
> would be formatted as:
> [cat (wikipedia.org)](https://en.wikipedia.org/wiki/Cat)

### To Do list
To do list should be reserved to be used only in [[To Do]]. All completed tasks should have the date that they were completed after them in the [[#Date and time]] format.

## Backups
Git backups should be done frequently at every relevant change that is made both in the documentation and in the project as a whole. There should be at least one commit per task completed in the [[To Do]].

The style formatting should follow the guidelines of [Conventional Commits (conventionalcommits.org)](https://www.conventionalcommits.org/en/v1.0.0/).

## Generating the Site
### Locally - for testing
To generate the site,  from the root folder run the following commands:

```bash
cd site
npx run build -d ../docs
```

### GitHub actions
