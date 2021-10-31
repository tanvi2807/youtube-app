import axios from 'axios';

const KEY = 'AIzaSyA9xCfBAD0G8U3DOLZl8FXSHU0zQzEpFtM';


export default axios.create ({
	baseURL: 'https://www.googleapis.com/youtube/v3' , 
	params: {
		part: 'snippet' ,
		type: 'video' ,
		maxResults: 15 ,
		key: KEY
	}
});