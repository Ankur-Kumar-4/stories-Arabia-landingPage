import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://run.mocky.io/v3/90d64d1d-4cb1-4d17-a25d-90bc21c7d207',
};

const testimonialService = async () => {
  try {
    const response = await axios.request(options);
    return response.data
    
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }

 
};

export default testimonialService;
