import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    html: {
      bg: mode(`gray.200`, `gray.800`)(props),
      h: "100vh",
      w: "100vw",

      body: {
        bg: mode(`gray.200`, `gray.800`)(props),
        h: "fit-content",
        w: "fit-content",
        overflow: "auto",

        "div#root": {
          bg: "transparent",
          w: "full",
          h: "full",
          minH: "100vh",
          minW: "100vw",
          p: [2, 2, 8],
        },
      },
    },
  }),
};

export default styles;
