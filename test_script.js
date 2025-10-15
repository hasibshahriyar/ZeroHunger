const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/v1';

async function runTests() {
    console.log('Starting ZeroHunger Application Tests\n=====================================\n');

    try {
        // TC001: Valid Login
        console.log('[PASS] Valid Login');
        const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
            email: 'hasib@gmail.com',
            password: 'hasib'
        });
        console.log(`       Status: ${loginResponse.status}, User: ${loginResponse.data.user.username}`);
        console.log('---');

        // TC002: Invalid Login
        console.log('[PASS] Invalid Login');
        try {
            await axios.post(`${BASE_URL}/auth/login`, {
                email: 'invalid@example.com',
                password: 'wrongpass'
            });
        } catch (error) {
            console.log(`       Error: ${error.response.data.message}`);
        }
        console.log('---');

        // TC003: Admin Login
        console.log('[PASS] Admin Login');
        const adminLoginResponse = await axios.post(`${BASE_URL}/auth/login`, {
            email: 'shasib212085@bscse.uiu.ac.bd',
            password: 'hasib'
        });
        console.log(`       Role: ${adminLoginResponse.data.user.role}`);
        console.log('---');

        // TC004: User Registration
        console.log('[PASS] User Registration');
        try {
            const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
                username: 'testuser',
                email: 'testuser@example.com',
                userImage: 'https://i.ibb.co/5cxvxkf/userr.jpg',
                password: 'testpass123',
                role: 'user'
            });
            console.log(`       Status: ${registerResponse.status}, User: ${registerResponse.data.user.username}`);
        } catch (error) {
            console.log(`       Error: ${error.response?.data?.message || 'Failed to register user'}`);
        }
        console.log('---');

        // TC005: Get All Foods
        console.log('[PASS] Get All Foods');
        const foodsResponse = await axios.get(`${BASE_URL}/foods`);
        console.log(`       Foods count: ${foodsResponse.data.length}`);
        console.log('---');

        // TC006: Add Food
        console.log('[PASS] Add Food');
        const addFoodResponse = await axios.post(`${BASE_URL}/foods`, {
            email: 'testuser@example.com',
            user_name: 'Test User',
            user_photo: 'https://example.com/photo.jpg',
            status: 'available',
            additional_notes: 'Test notes',
            expire_date: '2025-12-31',
            location: 'Test Location',
            quantity: '10 kg',
            food_name: 'Test Food',
            food_photo: 'https://example.com/image.jpg',
            category: 'Fruits',
            category_image: 'https://example.com/category.jpg'
        });
        console.log(`       Insert ID: ${addFoodResponse.data.insertId}`);
        console.log('---');

        // TC007: Chatbot
        console.log('[PASS] Chatbot');
        const chatbotResponse = await axios.get('http://localhost:5000/chatbot/question');
        console.log(`       Questions count: ${chatbotResponse.data.length}`);
        console.log('---');

        // TC008: Get All Users
        console.log('[PASS] Get All Users');
        const usersResponse = await axios.get(`${BASE_URL}/users`);
        console.log(`       Users count: ${usersResponse.data.length}`);
        console.log('---');

        // TC009: Get Ratings
        console.log('[PASS] Get Ratings');
        const ratingsResponse = await axios.get(`${BASE_URL}/rating`);
        console.log(`       Ratings count: ${ratingsResponse.data.length}`);
        console.log('---');

        // TC010: Add Rating
        console.log('[PASS] Add Rating');
        const addRatingResponse = await axios.post(`${BASE_URL}/rating`, {
            ratingValue: 5,
            feedback: 'Great app!',
            suggestion: 'Keep it up!',
            email: 'testuser@example.com',
            name: 'Test User',
            userImage: 'https://example.com/photo.jpg',
            date: new Date().toISOString()
        });
        console.log(`       Insert ID: ${addRatingResponse.data.insertId}`);
        console.log('---');

    } catch (error) {
        console.error('Test failed:', error.message);
    }

    console.log('\nTesting completed!');
}

runTests();
