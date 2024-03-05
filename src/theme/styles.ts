import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    "html, body": {
      bg: mode(`gray.200`, `gray.800`)(props),
      h: "fit-content",
      w: "fit-content",
      "div#root": {
        bg: "transparent",
        w: "full",
        h: "full",
        minH: "100vh",
        minW: "100vw",
        p: [2, 2, 8],
      },
    },
  }),
};

export default styles;
