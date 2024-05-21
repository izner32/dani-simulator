export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "pink.100",
      color: ["gray.700", null, "pink.700"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "3.5em",
      w: "3.5em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      boxShadow: "xl",
      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1.1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "10%",

      borderColor: "pink.600",
    },
    q2: {
      top: "20%",
      left: "20%",

      borderColor: "pink.600",
    },
    q3: {
      top: "50%",
      left: "30%",

      borderColor: "pink.600",
    },
    q4: {
      top: "20%",
      left: "40%",

      borderColor: "pink.600",
    },
    q5: {
      top: "20%",
      left: "60%",

      borderColor: "pink.600",
    },
    q6: {
      top: "80%",
      left: "40%",

      borderColor: "pink.600",
    },
    q7: {
      top: "80%",
      left: "60%",

      borderColor: "pink.600",
    },
    q8: {
      top: "50%",
      left: "70%",

      borderColor: "pink.600",
    },
    q9: {
      top: "50%",
      left: "90%",

      borderColor: "pink.600",
    },
    1: {
      top: "50%",
      left: "10%",

      borderColor: "pink.600",
    },
    2: {
      top: "20%",
      left: "20%",

      borderColor: "pink.600",
    },
    3: {
      top: "80%",
      left: "20%",

      borderColor: "pink.600",
    },
    4: {
      top: "50%",
      left: "30%",

      borderColor: "pink.600",
    },
    5: {
      top: "50%",
      left: "50%",

      borderColor: "pink.600",
    },
    6: {
      top: "20%",
      left: "60%",

      borderColor: "pink.600",
    },
    7: {
      top: "80%",
      left: "60%",

      borderColor: "pink.600",
    },
    8: {
      top: "50%",
      left: "70%",

      borderColor: "pink.600",
    },
    9: {
      top: "50%",
      left: "90%",

      borderColor: "pink.600",
    },
  },
  defaultProps: {
    size: "node",
  },
};
