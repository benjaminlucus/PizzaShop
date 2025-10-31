// Import the `defineOneEntry` function to create an API client instance
import { defineOneEntry } from 'oneentry';

// Import helper functions for handling refresh tokens
import retrieveRefreshToken from '@/actions/auth/getRefreshToken';
import storeRefreshToken from '@/actions/auth/storeRefreshToken';

// Declare a variable to hold the API client instance, initially set to `null`
let apiClient = null;

/**
 * Function to initialize the API client with a custom configuration.
 * This function ensures the client is created only once and reuses the same instance.
 */
async function setupApiClient() {
  // Retrieve the API URL from environment variables
  const apiUrl = process.env.ONEENTRY_PROJECT_URL;

  // Throw an error if the API URL is not defined
  if (!apiUrl) {
    throw new Error('ONEENTRY_PROJECT_URL is missing');
  }

  // Check if the API client is already initialized
  if (!apiClient) {
    try {
      // Retrieve the refresh token (if available) from storage
      const refreshToken = await retrieveRefreshToken();

      // Create a new instance of the API client with the required configuration
      apiClient = defineOneEntry(apiUrl, {
        token: process.env.ONENETRY_TOKEN, // Token for authentication
        langCode: 'en_US', // Language code for the API
        auth: {
          refreshToken: refreshToken || undefined, // Use the retrieved refresh token or `undefined`
          customAuth: false, // Disable custom authentication
          saveFunction: async (newToken) => {
            // Save the new refresh token when it is updated
            await storeRefreshToken(newToken);
          },
        },
        errors: {
          isShell: false, // Use try/catch error handling
          customErrors: {
            400: (error) =>
              console.error('Bad Request:', error?.message || 'Unknown error'),
            404: (error) =>
              console.error('Not Found:', error?.message || 'Unknown error'),
            500: (error) =>
              console.error('Server Error:', error?.message || 'Unknown error'),
          },
        },
      });
    } catch (error) {
      // Log an error if there is an issue retrieving the refresh token
      console.error('Error fetching refresh token:', error);
    }
  }

  // If the API client is still not initialized, throw an error
  if (!apiClient) {
    throw new Error('Failed to initialize API client');
  }

  // Return the initialized API client
  return apiClient;
}

/**
 * Function to retrieve the current API client instance.
 * If the client is not initialized, it will call `setupApiClient` to create it.
 */
export async function fetchApiClient() {
  // Check if the API client is already initialized
  if (!apiClient) {
    // If not, initialize it
    await setupApiClient();
  }

  // At this point, `apiClient` should not be null. If it is, throw an error.
  if (!apiClient) {
    throw new Error('API client is still null after setup');
  }

  // Return the initialized API client
  return apiClient;
}