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
      {/* ARROW BODY */}
      {/* q2 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["28%", "28%", "25%", "25%", "25%", "25%"]}
        left="30%"
        text='1'
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["88%", "88%", "85%", "85%", "85%", "85%"]}
        left="30%"
        text='0'
      />
      {/* q9 q10 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
        text='0,1'
        textTop={true}
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
        text='0'
      />
      {/* q2 q6 */}
      <ArrowBody
        w={["6,5em", "6.5em", "12em", "12em", "12em", "17em"]}
        top={["46.5%", "46.5%", "41%", "41%", "41%", "40.5%"]}
        left="34%"
        rotate={["38", "38", "30", "30", "30", "19"]}
        text='0'
      />
      {/* q4 q6 */}
      <ArrowBody
        w={["6.5em", "6.5em", "12em", "12em", "12em", "17em"]}
        top={["52.5%", "53.5%", "58%", "58%", "58%", "58.5%"]}
        left="34%"
        rotate={["142", "142", "150", "150", "150", "161"]}
        text='1'
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="61%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
        text='1'
      />
      {/* q1 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top={["71%", "71%", "71%", "70.6%", "70.8%", "72.6%"]}
        left={["12%", "12%", "14.5%", "14.5%", "14.5%", "15.2%"]}
        rotate={["59", "59", "52", "52", "52", "42"]}
        text='1'
      />
      {/* q7 q9 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="39%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
        text='0'
      />
      {/* q3 q6 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top={["41%", "41%", "41%", "40.6%", "40.8%", "42.6%"]}
        left={["42%", "42%", "44.5%", "44.5%", "44.5%", "45.2%"]}
        rotate={["70", "70", "55", "55", "55", "45"]}
        text='0,1'
        textTop={true}

      />
      {/* q6 q8 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top={["71%", "71%", "71%", "70.6%", "70.8%", "72.6%"]}
        left={["52%", "52%", "54.5%", "54.5%", "54.5%", "55.2%"]}
        rotate={["70", "70", "55", "55", "55", "45"]}
        text='1'
        textTop={true}
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top={["61%", "61%", "61%", "60.6%", "60.8%", "61%"]}
        left={["42%", "42%", "44.5%", "44.5%", "44.5%", "45%"]}
        rotate={["110", "110", "119", "119", "119", "124"]}
        text='0,1'
        textTop={true}
      />
      {/* q6 q7 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["51%", "51%", "53%", "53%", "53%", "54%"]}
        rotate={["120", "120", "127", "127", "127", "138"]}
        text='0'
        textTop={true}
      />
      {/* q7 q6 */}
      <ArrowBody
        w={["4.5em", "4.5em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["54%", "54%", "57%", "57%", "57%", "57%"]}
        rotate={["108", "108", "123", "123", "123", "137"]}
        text='0'
      />
      {/* q8 q6 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top={["66%", "66%", "65.8%", "65.8%", "65.8%", "66.8%"]}
        left={["53.2%", "53.2%", "56.2%", "56.2%", "56.2%", "56.2%"]}
        rotate={["72", "72", "57", "57", "57", "45"]}
        text='0'
      />
      {/* ARROW HEAD */}
      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "28.1%", "28.2%", "28.1%", "28%"]}
        left={["17.2%", "17.2%", "16.9%", "16.9%", "16.9%", "17.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q1 q4 */}
      <ArrowHead
        top={["71%", "71%", "71%", "70.6%", "70.8%", "72.6%"]}
        left={["17%", "17%", "17.5%", "17.5%", "17.5%", "17.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q2q4 q6 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.8%", "49.8%"]}
        left={["44%", "44%", "45.2%", "45.2%", "45.3%", "46.5%"]}
      />
      {/* q6 q7 */}
      <ArrowHead
        top={["29%", "29%", "28.1%", "28.2%", "28.1%", "28%"]}
        left={["57.2%", "57.2%", "56.9%", "56.9%", "56.9%", "57.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q3 q6 */}
      <ArrowHead
        top={["41%", "41%", "41%", "40.6%", "40.8%", "42.6%"]}
        left={["47%", "47%", "47.5%", "47.5%", "47.5%", "47.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q6 q8 */}
      <ArrowHead
        top={["71%", "71%", "71%", "70.6%", "70.8%", "72.6%"]}
        left={["57%", "57%", "57.5%", "57.5%", "57.5%", "57.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q7q8 q6 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.8%", "49.8%"]}
        left={["56.2%", "56.2%", "54.8%", "54.8%", "54.8%", "53.4%"]}
        rotate="180"
      />
      {/* q5 q6 */}
      <ArrowHead
        top={["59%", "59%", "59.3%", "59.3%", "59.1%", "58.3%"]}
        left={["47.1%", "47.3%", "47.5%", "47.5%", "47.5%", "47.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q7 q9 */}
      <ArrowHead
        top={["41%", "41%", "41%", "40.6%", "40.8%", "42.6%"]}
        left={["67%", "67%", "67.5%", "67.5%", "67.5%", "67.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
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
