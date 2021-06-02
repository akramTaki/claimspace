import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ElementCard from "../components/ElementCard";
import DropZone from "../components/DropZone";
import { List, Seperator, Steps } from "./style";
import { useEffect, useState } from "react";
import AddStep from "../components/AddStep";
import palette from "../helpers/colorPalette";

const Builder = ({ fakeData }) => {
  // lists states
  const [data, updateData] = useState([]);
  const [dropped, updateDropped] = useState([]);

  // element's state when being dragged
  const [isDragging, setIsDragging] = useState(false);

  // get the data from localStorage when the component mounts
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards")) || fakeData;
    const step = JSON.parse(localStorage.getItem("step")) || [];

    updateData(cards);
    updateDropped(step);
  }, [fakeData]);

  // when the element is dropped in the one of the lists
  const handleOnDragEnd = (result) => {
    // check if the element is dropped on the same list it was pulled from
    if (result.source?.droppableId === result.destination?.droppableId) {
      // reorder the list if the source and destination lists are the same
      const items = Array.from(data);
      const [reorderItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderItem);

      updateData(items);

      // persist data in localStorage
      localStorage.setItem("cards", JSON.stringify(items)); // update the cards value in localStorage
    } else if (result.destination) {
      // update the lists if the source and destination lists are different
      const items = Array.from(data);
      const [reorderItem] = items.splice(result.source.index, 1);
      dropped.splice(result.destination.index, 0, reorderItem);

      updateData(items);
      updateDropped(dropped);

      // persist data in localStorage
      localStorage.setItem("cards", JSON.stringify(items)); // update the cards value in localStorage
      localStorage.setItem("step", JSON.stringify(dropped)); // update the step items value in localStorage
    }

    // update the element's state for ui changes when it's dropped
    setIsDragging(false);
  };

  // update the element's state for ui changes when it's being dragged
  const handleDragStart = (a, b) => {
    setIsDragging(true);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleDragStart}>
      {/* List of items to drag from */}
      <Droppable droppableId="dragList" isDropDisabled={true}>
        {(provided) => (
          <List
            data-testid="dragList"
            className={`dragList ${isDragging ? "dragging" : null}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map(({ id, title, text }, ndx) => (
              <Draggable key={id} draggableId={String(id)} index={ndx}>
                {(provided, snapshot) => (
                  <>
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ElementCard
                        title={title}
                        text={text}
                        border={snapshot.isDragging ? palette("blue", 1) : null}
                      />
                    </div>
                    {/* create a clone of the element being dragged with low opacity in the original list
                     * to act like the element's shadow */}
                    {snapshot.isDragging ? (
                      <ElementCard
                        title={title}
                        text={text}
                        border={palette("gray", 1)}
                        style={{ opacity: 0.5 }}
                      />
                    ) : null}
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
      {/* List of the step's items */}
      <Droppable droppableId="dropList">
        {(provided) => (
          <Steps
            className={`dropList ${isDragging ? "isDragging" : null}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid="dropList"
          >
            <AddStep />
            <Seperator />
            <DropZone data-testid="dropZone" />
            <div data-testid="droppedList">
              {dropped.map(({ id, title, text }, ndx) => (
                <ElementCard
                  key={id}
                  title={title}
                  text={text}
                  noShadow
                  dotsCounts={0}
                />
              ))}
            </div>
            {provided.placeholder}
          </Steps>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Builder;
