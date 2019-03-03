import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";
import MediaCard from "../components/mediaCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default withRouteData(({ user }) => (
  <Container>
    <Link to="/user">{"<"} Back</Link>
    <MediaCard key={user.id} user={user} />
  </Container>
));
