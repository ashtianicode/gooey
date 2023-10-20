```typescript
import axios from 'axios';

export const fetchRoles = async () => {
    try {
        const response = await axios.get('/api/roles');
        return response.data;
    } catch (error) {
        console.error('Error fetching roles', error);
        return [];
    }
};
```