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
const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTER */}
      {/* q4 q5 */}
      <Text top={["16.5%", "16.5%", "16%", "16%", "16%", "15%"]} left="50%" size="label">
        a
      </Text>
      {/* q1 q2 */}
      <Text top="32%" left="14%" size="label">
        a
      </Text>
      {/* q2 q3 */}
      <Text top="32%" left={["27.6%", "27.6%", "26.6%", "26.6%", "26.6%", "26.5%"]} size="label">
        a,b
      </Text>
      {/* q3 q4 */}
      <Text top="32%" left="34%" size="label">
        a
      </Text>
      {/* q5 q8 */}
      <Text top="32%" left="66%" size="label">
        a
      </Text>
      {/* q4 q6 */}
      <Text top="50%" left={["42.5%", "42.5%", "42%", "42%", "42%", "42%"]} size="label">
        b
      </Text>
      {/* q6 q4 */}
      <Text top="50%" left={["37.5%", "37.5%", "38%", "38%", "38%", "38%"]} size="label">
        a
      </Text>
      {/* q5 q6 */}
      <Text top="41%" left="55.3%" size="label">
        b
      </Text>
      {/* q7 q4 */}
      <Text top="59%" left="55.3%" size="label">
        a
      </Text>
      {/* q8 q9 */}
      <Text top={["46.5%", "46.5%", "45.5%", "45.5%", "45.5%", "45%"]} left="80%" size="label">
        a,b
      </Text>
      {/* q1 q3 */}
      <Text top="53%" left="20%" size="label">
        b
      </Text>
      {/* q3 q6 */}
      <Text top="68%" left="34%" size="label">
        b
      </Text>
      {/* q7 q8 */}
      <Text top="68%" left="66%" size="label">
        b
      </Text>
      {/* q4 q5 */}
      <Text top="83%" left="50%" size="label">
        b
      </Text>
      {/* q9 */}
      <Text top={["27.5%", "27.5%", "29%", "29%", "29%", "27.5%"]} left="90%" size="label">
        a,b
      </Text>
      {/* ARROW BODY */}
      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="20%"
        rotate="0"
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["28%", "28%", "25%", "25%", "25%", "25%"]}
        left="50%"
      />
      {/* q6 q7 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["88%", "88%", "85%", "85%", "85%", "85%"]}
        left="50%"
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q3 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["31%", "31%", "33%", "33%", "33%", "34%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="61%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q5 q8 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="39%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q2 q3 q6 */}
      <ArrowBody
        w={["8em", "8em", "14em", "14em", "14em", "16em"]}
        top="53%"
        left={["26%", "26%", "28%", "28%", "28%", "28.5%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q4 q6 */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "11em", "11em"]}
        top="50%"
        left={["34.2%", "34.2%", "36.6%", "36.6%", "36.6%", "37.41%"]}
        rotate="90"
      />
      {/* q6 q4 */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "11em", "11em"]}
        top="50%"
        left={["36.3%", "36.3%", "38.7%", "38.7%", "38.6%", "39.45%"]}
        rotate="90"
      />
      {/* q7 q4 */}
      <ArrowBody
        w={["8em", "8em", "13.5em", "13.5em", "13.5em", "16em"]}
        top="53%"
        left={["45.7%", "45.7%", "48%", "48%", "48%", "48.9%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["8.4em", "8.4em", "13.8em", "13.8em", "13.8em", "16em"]}
        top="46%"
        left={["46.2%", "46.2%", "48.4%", "48.4%", "48.4%", "48.9%"]}
        rotate={["120", "120", "127", "127", "127", "138"]}
      />
      {/* ARROW HEAD */}
      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "28.1%", "28.2%", "28.1%", "27.9%"]}
        left={["17.2%", "17.2%", "16.9%", "16.9%", "16.9%", "17.5%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q3 q4 */}
      <ArrowHead
        top={["29%", "29%", "28.1%", "28.2%", "28.1%", "28%"]}
        left={["37.2%", "37.2%", "36.9%", "36.9%", "36.9%", "37.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q7 q8 */}
      <ArrowHead
        top={["59%", "59%", "59.2%", "59.2%", "59.1%", "58.3%"]}
        left={["67.1%", "67.2%", "67.5%", "67.6%", "67.5%", "67.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q2 q3 */}
      <ArrowHead
        top={["41%", "41%", "41.4%", "41.2%", "41.5%", "42.6%"]}
        left={["27.2%", "27.2%", "27.2%", "27%", "27.1%", "27.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q5 q8 */}
      <ArrowHead
        top={["41%", "41%", "41%", "40.7%", "40.9%", "42.6%"]}
        left={["67%", "67%", "67.5%", "67.5%", "67.4%", "67.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q3 q6 */}
      <ArrowHead
        top={["70.7%", "70.7%", "71.6%", "71.5%", "71.6%", "72.5%"]}
        left={["37.4%", "37.4%", "37%", "37%", "36.9%", "37.3%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q1 q3 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.8%", "49.8%"]}
        left={["24%", "24%", "25.3%", "25.3%", "25.3%", "26.5%"]}
      />
      {/* q8 q9 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.9%", "49.8%"]}
        left={["84%", "84%", "85.2%", "85.2%", "85.3%", "86.5%"]}
      />
      {/* q4 q5 */}
      <ArrowHead
        top={["20.2%", "20.2%", "19.9%", "19.9%", "19.9%", "19.7%"]}
        left={["54%", "54%", "55.3%", "55.3%", "55.3%", "56.5%"]}
      />
      {/* q6 q7 */}
      <ArrowHead
        top={["80.2%", "80.2%", "79.9%", "79.9%", "79.9%", "79.7%"]}
        left={["54%", "54%", "55.3%", "55.3%", "55.3%", "56.5%"]}
      />
      {/* q6 q4 */}
      <ArrowHead
        top={["30%", "30%", "30.4%", "30.4%", "30.2%", "31%"]}
        left="39%"
        rotate="-90"
      />
      {/* q4 q6 */}
      <ArrowHead
        top={["70%", "70%", "69.7%", "69.7%", "69.5%", "68.9%"]}
        left="41%"
        rotate="90"
      />
      {/* q7 q4 */}
      <ArrowHead
        top={["28.7%", "28.7%", "28.5%", "28.5%", "28.5%", "27.1%"]}
        left={["42.8%", "42.8%", "43%", "43%", "43%", "42.7%"]}
        rotate={["-123", "-123", "-125", "-125", "-125", "-135"]}
      />
      {/* q5 q6 */}
      <ArrowHead
        top={["71.3%", "71.3%", "71.3%", "71.3%", "71.3%", "72.3%"]}
        left={["42.9%", "42.9%", "42.7%", "42.8%", "42.8%", "42.5%"]}
        rotate={["123", "123", "125", "125", "125", "135"]}
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
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        -
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        
      </Atom>
      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        +
      </Atom>
    </>
  );
};
export default FirstDFA;