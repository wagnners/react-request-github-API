import queryString from 'query-string';
import axios from 'axios';

const api = {
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET'
}

export const getToken = async (search) => {

    const code = encodeURIComponent(queryString.parse(search).code);

    try {
        return await axios.post(`/login/oauth/access_token?client_id=${api.client_id}&client_secret=${api.client_secret}&code=${code}`)
        .then((response) => {

            const values = queryString.parse(response.data);

            return {
                token: values.access_token,
                token_type: values.token_type,
                client_id: api.client_id,
                client_secret: api.client_secret,
                code
            };
            
        })
        .catch((e) => {
          return '';
        });
    } catch (error) {
      console.log(">>>> src/helpers/Utils.js : getCurrentUser -> error", error)
      return '';
    }
}

export const getUsers = async (query, access) => {
    try {
        return await axios.get(`https://api.github.com/search/users?q=${query}`,
        {
            'headers': {
              'Authorization': `${access.token_type} ${access.token}` 
            }
        })
        .then((response) => {
            return response.data.items;
        })
        .catch((e) => {
          return '';
        });
    } catch (error) {
      console.log(">>>> src/helpers/GitHubAPi.js : getRepositories -> error", error)
      return '';
    }
}

export const getRepositories = async (query, access) => {
  try {
      return await axios.get(`https://api.github.com/search/repositories?q=${query}`,
      {
          'headers': {
            'Authorization': `${access.token_type} ${access.token}` 
          }
      })
      .then((response) => {
          return response.data.items;
      })
      .catch((e) => {
        return '';
      });
  } catch (error) {
    console.log(">>>> src/helpers/GitHubAPi.js : getRepositories -> error", error)
    return '';
  }
}

export const getRepositoriesMostSeen = async (access) => {
  try {

    
      return await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars`,
      {
          'headers': {
            'Authorization': `${access.token_type} ${access.token}` 
          }
      })
      .then((response) => {
          return response.data.items;
      })
      .catch((e) => {
        return '';
      });
  } catch (error) {
    console.log(">>>> src/helpers/GitHubAPi.js : getRepositories -> error", error)
    return '';
  }
}

export const getUsersRepositories = async (url, access) => {
  try {
      return await axios.get(url,
      {
          'headers': {
            'Authorization': `${access.token_type} ${access.token}` 
          }
      })
      .then((response) => {
          return response.data;
      })
      .catch((e) => {
        return '';
      });
  } catch (error) {
    console.log(">>>> src/helpers/GitHubAPi.js : getRepositories -> error", error)
    return '';
  }
}