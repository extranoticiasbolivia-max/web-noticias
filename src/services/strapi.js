const API_URL = import.meta.env.VITE_STRAPI_URL;
const API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`
};

export const strapiService = {
    async getArticles() {
        try {
            const response = await fetch(`${API_URL}/api/articles?populate=*`, { headers });
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            return [];
        }
    },

    async getFeatured() {
        try {
            const response = await fetch(`${API_URL}/api/articles?filters[featured][$eq]=true&populate=*`, { headers });
            const data = await response.json();
            return data.data[0] || null;
        } catch (error) {
            console.error('Error fetching featured article:', error);
            return null;
        }
    },

    async incrementViews(id, currentViews) {
        try {
            const response = await fetch(`${API_URL}/api/articles/${id}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({
                    data: {
                        views: (currentViews || 0) + 1
                    }
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Error incrementing views:', error);
        }
    }
};
