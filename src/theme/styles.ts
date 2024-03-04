import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    "html, body": {
      bg: mode(`gray.200`, `gray.800`)(props),
      h: "fit-content",
      w: "full",
    },
    "#root": {
      bg: "transparent",
      w: "inherit",
      h: "inherit",
      minW: "100vw",
      minH: "100vh",
      p: [2, 2, 8],
    },
  }),
};

export default styles;
