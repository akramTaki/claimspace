import React, { useEffect } from "react";
import { useState } from "react";
import { SubTitle, Text } from "../typography";
import { AddStepWrapper, Input, TextArea } from "./style";

const AddStep = () => {
  // state
  const [title, setTitle] = useState("Add step name");
  const [text, setText] = useState("Add step description");

  // edit mode toggles
  const [editTitle, seteditTitle] = useState(false);
  const [editText, seteditText] = useState(false);

  // side effects
  useEffect(() => {
    // get the values from local storage when the component mounts
    const oldTitle = localStorage.getItem("title");
    const oldText = localStorage.getItem("text");

    // set the title and the description if they are not empty
    oldTitle && setTitle(oldTitle);
    oldText && setText(oldText);
  }, []);

  return (
    <AddStepWrapper>
      {/* Check if in edit mode, show the input */}
      {editTitle ? (
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value); // update the title value in the state
          }}
          onBlur={(e) => {
            seteditTitle(false); // exit edit mode when the input loses focus
            localStorage.setItem("title", title); // update the title value in localStorage
          }}
          autoFocus
        />
      ) : (
        // if not in edit mode, show the title
        <SubTitle onClick={() => seteditTitle(true)}>{title}</SubTitle>
      )}

      {/* Check if in edit mode, show the input */}
      {editText ? (
        <TextArea
          value={text}
          onChange={(e) => {
            setText(e.target.value); // update the description value in the state
          }}
          onBlur={() => {
            seteditText(false); // exit edit mode when the textarea loses focus
            localStorage.setItem("text", text); // update the description value in localStorage
          }}
          autoFocus
        >
          {text}
        </TextArea>
      ) : (
        // if not in edit mode, show the description
        <Text onClick={() => seteditText(true)}>{text}</Text>
      )}
    </AddStepWrapper>
  );
};

export default AddStep;
