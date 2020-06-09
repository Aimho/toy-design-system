import styled from "styled-components";
import { ColorSet } from "../../utils/theme";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

const Divider = styled.hr.attrs((props: Props) => ({
  marginTop: props.marginTop || 0,
  marginBottom: props.marginBottom || 0
}))`
  background-color: ${ColorSet.Background_Base};
  margin-top: ${props => `${props.marginTop}px`};
  margin-bottom: ${props => `${props.marginBottom}px`};
`;

export default Divider;
