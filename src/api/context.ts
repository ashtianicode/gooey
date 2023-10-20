```typescript
import axios from 'axios';

export const fetchContexts = async () => {
    try {
        const response = await axios.get('/api/context');
        return response.data;
    } catch (error) {
        console.error('Error fetching contexts', error);
        return [];
    }
};
```