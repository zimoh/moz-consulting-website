# MoZ Consulting Static Site

Static export of `/moz-consulting-website` prepared for local development and later GitHub Pages deployment.

## Local Preview

```sh
python3 -m http.server 8098
```

Then open:

```txt
http://127.0.0.1:8098/
```

## Deployment Notes

- `CNAME` is set to `mozconsulting.tech` for GitHub Pages.
- `.nojekyll` is present so GitHub Pages serves WordPress-style paths like `wp-content/` directly.
- This is a static mirror. WordPress admin, comments, dynamic forms, and server-side features are not included.
