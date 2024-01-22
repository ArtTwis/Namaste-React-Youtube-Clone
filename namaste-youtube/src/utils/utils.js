export const convertYouTubeDuration = (duration) => {
    if(duration) {
      const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      if(match) {
        const hours = (match[1] ? parseInt(match[1]) : 0);
        const minutes = (match[2] ? parseInt(match[2]) : 0);
        const seconds = (match[3] ? parseInt(match[3]) : 0);
      
        return {
          hours,
          minutes,
          seconds
        };
      }
    }
  }