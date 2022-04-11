const UserQuery = graphql`  
    query UserQuery($id: ID!) { 
        user(id: $id) {
            id
            email
        }
     }
`