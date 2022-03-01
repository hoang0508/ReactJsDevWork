import { Fragment } from "react";
import "./App.scss";
import Accordion from "./components/Accordion/Accordion";
import Modal from "./components/Modal/Modal";
// import FormUseHook from "./components/Form/FormUseHook";
const data = [
  {
    id: 1,
    title: "In just 3 hours, learn basic HTML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
  {
    id: 2,
    title: "This tutorial will teach you CSS from basic to advanced",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
  {
    id: 3,
    title: "Master your language with lessons, quizzes, and projects",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
  {
    id: 4,
    title: "Focus on Learning Programming Basics",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
];
function App() {
  return (
    <>
      {/* <div>Hello</div> */}
      {/* <FormUseHook /> */}
      {/* {data &&
        data.length &&
        data.map((item, index) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))} */}
      <Modal />
    </>
  );
}

export default App;
