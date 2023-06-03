import axios from '../api/jsonPH';
import useAxiosFunction from '../hooks/useAxiosFunction';
import { useEffect } from 'react';

import React from 'react'

const Posts = () => {
  const [posts, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/posts'
    });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'POST',
      url: '/posts',
      requestConfig: {
        data: {
          userId: 10,
          title: 'Axios stuff',
          body: 'Axios hook stuff'
        }
      }
    })
  };

  return (
    <article>
      <h2>Posts</h2>

      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={getData}>Refetch</button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && posts?.length &&
        <ul>
          {posts.map((post, idx) => (
            <li key={idx}>
              {`${post.id}. ${post.title}`}
            </li>
          ))}
        </ul>
      }

      {!loading && !error && !posts?.length && posts?.data &&
        <p>{`userId: ${posts.data?.userId}, title: ${posts.data?.title}, body: ${posts.data?.body}`}</p>
      }

      {!loading && !error && !posts && <p>No posts to display</p>}

    </article>
  )
}

export default Posts