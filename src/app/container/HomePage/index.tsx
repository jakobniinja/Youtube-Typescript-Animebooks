import React, { useEffect } from "react";
import { Dispatch } from "redux";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./homePageSlice";
import { HotAnime } from "./hotAnime";

interface HomepageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

const HomePage = (props: HomepageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0, 50).catch((err) => {
      console.log(err);
    });

    console.log("animePage: ", animePage);
    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
};

export default HomePage;
