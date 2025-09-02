import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const HeaderModal = ({ isOpen, closeModal }) => {
  const { user, logout } = useAuth();
  const [role] = useRole();

  const handleLogout = async () => {
    await logout();
    closeModal();
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-baseline justify-end px-16 py-12 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[320px]  transform overflow-hidden  rounded-md text-left align-middle shadow-xl transition-all ">
                  <div className=" grid grid-rows-10   h-[500px] rounded-md">
                    <div className="row-span-2 bg-white "></div>
                    <div className="bg-cyan-400 row-span-6 flex flex-col items-center relative">
                      <img
                        className="w-[70px] rounded-full h-[70px] absolute -top-9"
                        src={user?.userImage}
                        alt=""
                      />
                      <div className="mt-12 text-white flex flex-col items-center ">
                        <p className="font-medium text-lg capitalize ">
                          {user?.username}
                        </p>
                        <p className="text-sm">{user?.email}</p>
                        <p className="capitalize">{role}</p>
                      </div>
                    </div>
                    <div className="flex justify-center row-span-2  bg-cyan-400 ">
                      <button
                        className=" btn  bg-white text-black z-50 border-none"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default HeaderModal;
