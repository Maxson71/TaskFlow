import { Notes } from "./notes";
import { Tag } from "@/app/widgets/tag/tag";
import { MoreIcon } from "@/components/ui/more-icon";
import { FiFileText } from "react-icons/fi";
import { BiSolidPencil } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

export function NoteBlock() {
  return (
    <div className="space-y-4 max-w-96 px-5">
      <div className="flex space-between items-center justify-between pb-2 shadow">
        <div className="flex space-x-1 items-center justify-center">
          <div className="h-4 w-4 bg-gray-300 rounded flex items-center justify-center">
            <BiSolidPencil size="12" color="gray" />
          </div>
          <p className="text-base font-medium text-gray-600">Notes</p>
        </div>
        <div className="h-4 w-4 bg-blue-200 rounded cursor-pointer flex items-center justify-center">
          <FaPlus size="8" color="blue" />
        </div>
      </div>

      <div className="inline-flex flex-col space-y-4 items-start justify-start">
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start px-4 py-3.5 bg-white shadow border rounded-lg border-gray-200">
          <div className="inline-flex space-x-2.5 items-center justify-between w-full">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-center w-5 h-full px-0.5 py-0.5 bg-black bg-opacity-0">
                <FiFileText />
              </div>
              <p className="text-xs text-gray-400">Apr 2, 2023</p>
            </div>
            <MoreIcon />
          </div>
          <div className="flex flex-col space-y-1 items-start justify-start">
            <p className="w-full text-sm font-semibold text-gray-600">
              ChatGPT Tricks for business marketing
            </p>
            <p className="w-full text-xs font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui
              mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu
              slorem ipsum dolor sit amet
            </p>
          </div>
          <div className="inline-flex space-x-2 items-start justify-start">
            <Tag text="AI" />
            <Tag text="Sport" />
            <Tag text="Program" />
            <Tag text="Python" />
          </div>
        </div>
        <Notes />
      </div>
    </div>
  );
}
