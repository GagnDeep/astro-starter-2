sed -i 's/<Layout {...props}>/<Layout {...props} title={props.title || "TrackAndLog"}>/g' src/layouts/Page.astro
sed -i 's/<Layout {...props}>/<Layout {...props} title={props.title || "TrackAndLog"}>/g' src/layouts/Paginated.astro
