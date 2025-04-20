// Function to redirect to FreeTube
function redirectToFreeTube() {
  const url = new URL(window.location.href)

  // Remove tracking parameters
  url.searchParams.delete("si")

  // Create FreeTube URL
  const freetubeUrl = "freetube://" + url.href

  // Redirect to FreeTube
  window.location.href = freetubeUrl
}

// Check if we're on a YouTube page that should be redirected
if (window.location.hostname.endsWith("youtube.com") || window.location.hostname === "youtu.be") {
  // Only redirect main pages, not embedded content
  if (window === window.top) {
    redirectToFreeTube()
  }
}
