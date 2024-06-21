import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tab1 from "../Component/Tab1";
import Tab2 from "../Component/Tab2";
import Tab3 from "../Component/Tab3";
import Tab4 from "../Component/Tab4";

const Program = () => {
  return (
    <div className="">
      {/* tab button */}
      <Tabs>
        <TabList className="flex justify-center custom-tab  flex-wrap sm:flex-nowrap">
          <Tab className="contents border-0 chat chat-end gap-0 w-full">
            <div className="chat-bubble rounded-3xl rounded-bl-none chat-bubble-info p-5 text-white inline-block w-full bg-teal-300 text-center">
              Programs & Duration
            </div>
          </Tab>
          <Tab className="contents border-0 chat chat-end  gap-0 w-full">
            <div className="chat-bubble rounded-3xl chat-bubble-info p-5 text-white inline-block w-full bg-[#9667EF] text-center">
              Cost of Studying
            </div>
          </Tab>
          <Tab className="contents border-0 chat chat-end  gap-0 w-full">
            <div className="chat-bubble rounded-3xl chat-bubble-info p-5 text-white inline-block w-full bg-[#BF0C3D] text-center">
              Academic Intakes
            </div>
          </Tab>
          <Tab className="contents border-0 chat chat-end  gap-0 w-full">
            <div className="chat-bubble rounded-3xl chat-bubble-info p-5 text-white inline-block w-full bg-[#407BFF] text-center">
              Deadline
            </div>
          </Tab>
        </TabList>

        {/* tab details */}
        <TabPanel>
          <Tab1 />
        </TabPanel>
        <TabPanel>
          <Tab2 />
        </TabPanel>
        <TabPanel>
          <Tab3 />
        </TabPanel>
        <TabPanel>
          <Tab4 />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Program;
