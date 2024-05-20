import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GET_CHARACTER($id: ID = 1) {
    character(id: $id) {
      id
      name
      image
      gender
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  return { error, data, loading };
};
