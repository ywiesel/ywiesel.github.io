# Portfolio Maintenance Notes

This folder is for internal notes about maintaining the portfolio repository.

## Pages

- `index.html`: homepage and portfolio overview
- `about.html`: background, skills, and strengths
- `projects.html`: project descriptions, screenshots, and presentation links

## Assets

- `assets/css/`: shared stylesheet
- `assets/images/`: screenshots and image files
- `assets/presentations/`: presentation PDFs

## Path Rule

Because the site is served from the repository root, use relative paths from the HTML file:

```html
<link rel="stylesheet" href="assets/css/styles.css">
<img src="assets/images/checkersPhoto.png" alt="...">
<a href="assets/presentations/Forge%20Mini-search%20engine%20S26.pdf">View Presentation PDF</a>
```
