# CMS Guide

## Login

- Admin URL: `/admin`
- Default users come from `.env`
- Admin email: `PAYLOAD_ADMIN_EMAIL`
- Admin password: `PAYLOAD_ADMIN_PASSWORD`
- Writer email: `PAYLOAD_EDITOR_EMAIL`
- Writer password: `PAYLOAD_EDITOR_PASSWORD`

## Collections

- `Articles`: write and publish blog posts
- `Categories`: manage blog topics
- `Media`: upload cover images and OG images
- `Users`: admin/editor accounts

## Writing A Blog Post

1. Open `Articles`
2. Click `Create New`
3. Fill `Title`
4. Leave `Slug` blank if you want it auto-generated
5. Add `Excerpt`
6. Write the main article in `Content`
7. Choose `Cover Image` and `Category`
8. Add `Author Name`
9. Add tags if needed
10. Use Payload's built-in `Save Draft` while editing
11. Click `Publish` when the article is ready

## Editor Experience

- Drafts are enabled
- Autosave is enabled
- `Preview Path` is generated automatically
- `Read Time` is generated automatically if empty
- `Published At` is filled automatically on first publish

## SEO

For each article you can set:

- `SEO Title`
- `SEO Description`
- `OG Image`
