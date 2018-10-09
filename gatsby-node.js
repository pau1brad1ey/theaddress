exports.onCreatePage = ({ page }) => {
  if (page.path.startsWith('/new')) {
    page.layout = 'new'
  }
}
