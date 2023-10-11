import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

function Section() {
  const localStorageItems = JSON.parse(localStorage.getItem("companies"));
  const [companies, updateCompanies] = useState(
    localStorageItems ? localStorageItems : Companies
  );

  const handleOnDragEnd = (result) => {
    // console.log(result);
    const items = Array.from(companies);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCompanies(items);

    localStorage.setItem("companies", JSON.stringify(items));
  };

  return (
    <div className="sm:mx-32 my-8">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="company">
          {(provided) => (
            <ul
              className="sm:p-4 p-2 text-black flex flex-col gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {companies.map((company, index) => {
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
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Section;
