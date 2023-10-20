```typescript
import axios from 'axios';

export const fetchMemories = async () => {
    try {
        const response = await axios.get('/api/memory');
        return response.data;
    } catch (error) {
        console.error('Error fetching memories:', error);
        return [];
    }
};
```