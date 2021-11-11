import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(0)};
  max-width: 900%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`

  }
`;

export const BoxTitle = styled.h3`
  }
`;

export const BoxText = styled.p`
 
  }
`;