import { Container } from "../../assets/css/style";
import {
  DetailTableDiv,
  DetailİmageDiv,
  DetailTextDiv,
} from "./styleDetailTable";

function DetailTable() {
  return (
    <Container>
      <DetailTableDiv>
        <DetailİmageDiv></DetailİmageDiv>
        <DetailTextDiv></DetailTextDiv>
      </DetailTableDiv>
    </Container>
  );
}

export default DetailTable;
