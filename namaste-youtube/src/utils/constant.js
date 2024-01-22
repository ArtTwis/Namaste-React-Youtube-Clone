export const YOUTUBE_API_KEY = "AIzaSyDeXpZVswvN4A-w9RaDZgyUUvK-av_LFdw";

export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_COMMENTS_API_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&maxResults=100&videoId=";

export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const GOOGLE_SEARCH_SUGGESTION_API = "https://clients1.google.com/complete/search?hl=en&output=toolbar&q=";

export const GOOGLE_SEARCH_SUGGESTION_API2 = "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=";