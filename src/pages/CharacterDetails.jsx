import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import styles from "./../components/CharacterDetails.module.css";

function CharacterDetails() {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!data) {
    return <div className={styles.noData}>No character details available.</div>;
  }

  const thisData = data?.character;
  console.log(thisData);
  return (
    <div className={`${styles.character} mx-auto !bg-[#181b23] relative `}>
      <div className="md:flex justify-center gap-10 items-center">
        {" "}
        <img
          src={thisData.image}
          alt={thisData.name}
          className={`${styles.characterImage}      !w-full  !h-auto !md:w-[400px] mt-10 !md:h-[400px] !rounded-full`}
        />
        <div className="text-[white] md:text-5xl">
          {" "}
          <p className="my-5">
            Name: <strong>{thisData.name}</strong>
          </p>
          <p>Gender: {thisData.gender}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className="grid md:grid-cols-4 mx-auto gap-x-3 max-w-[90%]">
          {thisData.episode &&
            thisData.episode.map((episode) => (
              <div
                key={episode.id}
                className={`${styles.episode} flex !bg-[#323c55] text-white`}
              >
                <p>Episode: {episode.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
