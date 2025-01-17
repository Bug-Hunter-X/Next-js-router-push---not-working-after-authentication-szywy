```javascript
import {useRouter} from 'next/router';
import {useAuth} from '../context/authContext'; // Assuming you have an auth context

function MyComponent() {
  const router = useRouter();
  const {isAuthenticated} = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      router.replace('/my-page'); // Use router.replace instead of router.push
    } else {
      // Handle authentication (e.g., redirect to login)
      router.push('/login');
    }
  };

  return (
    <button onClick={handleClick}>
      Go to My Page
    </button>
  );
}

export default MyComponent;```