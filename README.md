# YouTube to FreeTube Redirector

A simple Chrome extension that automatically redirects YouTube links to the FreeTube app.

## Features

- Automatically redirects YouTube links to FreeTube
- Removes tracking parameters from URLs
- Works with both youtube.com and youtu.be links
- Simple and lightweight

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How it Works

The extension intercepts YouTube URLs and converts them to the FreeTube protocol format. For example:

- From: `https://www.youtube.com/watch?v=VIDEO_ID`
- To: `freetube://www.youtube.com/watch?v=VIDEO_ID`
