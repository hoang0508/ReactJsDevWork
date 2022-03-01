import { Fragment } from "react";
import "./App.scss";
import Accordion from "./components/Accordion/Accordion";
// import FormUseHook from "./components/Form/FormUseHook";
const data = [
  {
    title: "In just 3 hours, learn basic HTML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
  {
    title: "This tutorial will teach you CSS from basic to advanced",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
  {
    title: "Master your language with lessons, quizzes, and projects",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia.",
  },
  {
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
      <Accordion
        {...(data &&
          data.length > 0 &&
          data.map((item, index) => (
            <Fragment key={item.id}>
              title={item.title}
              content={item.content}
            </Fragment>
          )))}
      />
    </>
  );
}

export default App;
