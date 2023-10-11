import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Section() {
  const Companies = [
    {
      id: "company-01",
      name: "Firma 1",
    },
    {
      id: "company-02",
      name: "Firma 2",
    },
    {
      id: "company-03",
      name: "Firma 3",
    },
    {
      id: "company-04",
      name: "Firma 4",
    },
    {
      id: "company-05",
      name: "Firma 5",
    },
  ];

  return (
    <div className="sm:mx-32 my-8">
      <DragDropContext>
        <Droppable droppableId="character">
          {(provided) => (
            <ul
              className="sm:p-4 p-2 text-black flex flex-col gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Companies.map((company, index) => {
                return (
                  <Draggable
                    draggableId={company.id}
                    key={company.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="flex justify-between p-2 bg-white rounded-md"
                      >
                        <p className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            className="mt-1"
                          >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                          </svg>
                          {company.name}
                        </p>
                        <button className=" bg-tpr-green rounded-lg px-2 text-white">
                          Randevu Al
                        </button>
                      </li>
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Section;
