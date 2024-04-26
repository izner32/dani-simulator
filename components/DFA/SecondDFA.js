import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";
const Atom = motion(Badge);
const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};
const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* LETTER */}
      {/* q2 q3 */}
      <Text top={["16.5%", "16.5%", "16%", "16%", "16%", "15%"]} left="30%" size="label">
        1
      </Text>
      {/* q1 q2 */}
      <Text top="32%" left="14%" size="label">
        0
      </Text>
      {/* q6 q7 */}
      <Text top="32%" left="54%" size="label">
        0
      </Text>
      {/* q7 q9 */}
      <Text top="32%" left="66%" size="label">
        0
      </Text>
      {/* q1 q4 */}
      <Text top="68%" left="14%" size="label">
        1
      </Text>
      {/* q6 q8 */}
      <Text top="68%" left="54%" size="label">
        1
      </Text>
      {/* q8 q9 */}
      <Text top="68%" left="66%" size="label">
        1
      </Text>
      {/* q9 q10 */}
      <Text top={["46.5%", "46.5%", "45.5%", "45.5%", "45.5%", "45%"]} left="80%" size="label">
        0,1
      </Text>
      {/* q4 q5 */}
      <Text top="84%" left="30%" size="label">
        0
      </Text>
      {/* q10 */}
      <Text top={["27.5%", "27.5%", "29%", "29%", "29%", "27.5%"]} left="90%" size="label">
        0,1
      </Text>
      {/* ARROW BODY */}
      {/* q2 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["28%", "28%", "25%", "25%", "25%", "25%"]}
        left="30%"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["88%", "88%", "85%", "85%", "85%", "85%"]}
        left="30%"
      />
      {/* q9 q10 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="61%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q1 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="69%"
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q7 q9 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="39%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q3 q6 q8 */}
      <ArrowBody
        w={["8em", "8em", "14em", "14em", "14em", "16em"]}
        top="53%"
        left={["46%", "46%", "48%", "48%", "48%", "48.5%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q5 q6 q7*/}
      <ArrowBody
        w={["8em", "8em", "14em", "14em", "14em", "16em"]}
        top="46%"
        left={["46%", "46%", "48%", "48%", "48%", "49%"]}
        rotate={["120", "120", "127", "127", "127", "138"]}
      />
      {/* ARROW HEAD */}
      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "28.1%", "28.2%", "28.1%", "28%"]}
        left={["17.2%", "17.2%", "16.9%", "16.9%", "16.9%", "17.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q6 q7 */}
      <ArrowHead
        top={["29%", "29%", "28.2%", "28.2%", "28.2%", "28%"]}
        left={["57.3%", "57.3%", "57%", "57%", "57%", "57.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q3 q6 */}
      <ArrowHead
        top={["41%", "41%", "41.2%", "41.3%", "41.3%", "42.6%"]}
        left={["47.2%", "47.2%", "47.1%", "47%", "47%", "47.3%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q7 q9 */}
      <ArrowHead
        top={["41%", "41%", "41%", "40.6%", "40.8%", "42.6%"]}
        left={["67%", "67%", "67.5%", "67.5%", "67.5%", "67.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q5 q6 */}
      <ArrowHead
        top={["59%", "59%", "58%", "58%", "58%", "57.8%"]}
        left={["47.1%", "47.1%", "47%", "47%", "46.9%", "47.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q8 q9 */}
      <ArrowHead
        top={["59%", "59%", "59.3%", "59.3%", "59.1%", "58.3%"]}
        left={["67.1%", "67.3%", "67.5%", "67.5%", "67.5%", "67.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q2 q3 */}
      <ArrowHead
        top={["20.2%", "20.2%", "19.9%", "19.9%", "19.9%", "19.7%"]}
        left={["34%", "34%", "35.3%", "35.3%", "35.3%", "36.5%"]}
      />
      {/* q4 q5 */}
      <ArrowHead
        top={["80.2%", "80.2%", "79.9%", "79.9%", "79.9%", "79.7%"]}
        left={["34%", "34%", "35.3%", "35.3%", "35.3%", "36.5%"]}
      />
      {/* q9 q10 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.8%", "49.8%"]}
        left={["84%", "84%", "85.2%", "85.2%", "85.3%", "86.5%"]}
      />
      {/* ARROWLOOP */}
      {/* q9 */}
      <ArrowLoopLg
        top={["37%", "37%", "37%", "37%", "37%", "36%"]}
        left="90%"
        rotate="110"
      />
      {/* ATOM */}
      <Atom
        variant="1"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 1 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q1
      </Atom>
      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q6
      </Atom>
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q7
      </Atom>
      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q8
      </Atom>
      <Atom
        variant="9"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 9 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q9
      </Atom>
      <Atom
        variant="10"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 10 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q10
      </Atom>
    </>
  );
};
export default SecondDFA;