class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResulte=25&key=${this.key}`, this.requestOptions);
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(keyword) {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=${this.key}`, this.requestOptions);
      const result_1 = await response.json();
      return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
      // return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;