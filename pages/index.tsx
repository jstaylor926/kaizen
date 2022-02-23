import * as React from 'react';
import Layout from '../components/Layout/Layout'
import { useQuery, gql } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/getCharacter';


const Home = () => {
 const { loading, error, data } = useQuery(GET_CHARACTERS)
 if (loading) return <span>Loading...</span>;
 if (error) return <span> `Error: ${error.message}`</span>

 console.log(data)
  return (
    <Layout headerTitle="Home Page">
         
    </Layout>
  )
}

export default Home
