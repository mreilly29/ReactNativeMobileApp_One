import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        // need API Key
        Authorization:'Bearer hXvjRbj6UBS9A5EHXYkwFW-k0yIYM2AXbdhc20Ag76hYdwyuUDmA447q4x-4NkeAR6gYs_pt912yeab4LZpyZNMN0zCj1emwXC6WsEFR9VTgofU2Xuv34DdnyQGfXnYx'
    }
});

// Client ID
// peNtQG9HVpUDgI4DW1I-qA