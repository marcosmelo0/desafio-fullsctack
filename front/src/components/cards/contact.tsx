import { ContactData } from "../forms/contact/validator";
import { CgProfile } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { RiCellphoneLine } from "react-icons/ri";

interface CardProps {
  contact: ContactData;
}

export const Contacts = ({ contact }: CardProps) => {
  return (
    <div className="flex ml-10 w-[75vw] mb-5 mt-5 border-box rounded-[10px] overflow-hidden border-2 border-gray-500">
      <li className="flex flex-col gap-3 w-[95%] pb-5">
        <div className="flex whitespace-nowrap gap-2 items-center w-auto justify-between pl-3 pt-3">
          <span>
            <CgProfile />
          </span>
          <span>{contact.name}</span>
          <div className="flex gap-2 justify-end w-[100vw] items-center">
            <p className="text-xl cursor-pointer">
              <AiOutlineEdit />
            </p>
            <p className="text-xl cursor-pointer">
              <AiOutlineDelete />
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center pl-3 w-[100vw] overflow-hidden max-w-max">
            <TfiEmail />
          <p className="text-sm whitespace-nowrap">
            {contact.email}
          </p>
        </div>
        <div className="flex w-auto gap-2 items-center pl-3">
          < RiCellphoneLine />
          <span className="text-base">{contact.telephone}</span>
        </div>
      </li>
    </div>
  );
};
