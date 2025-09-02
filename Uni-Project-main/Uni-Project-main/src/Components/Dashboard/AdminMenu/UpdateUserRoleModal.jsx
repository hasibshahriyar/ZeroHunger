import { Fragment, useState } from "react";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { LuChevronsUpDown } from "react-icons/lu";

import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const userRole = ["user", "admin", "donor"];
const UpdateUserRoleModal = ({
  isOpen,
  closeModal,
  user,
  refetch,
  setIsOpen,
}) => {
  const axios = useAxios();
  const [selected, setSelected] = useState(userRole[0]);

  const handleUpdateRole = async (email) => {
    const userRole = {
      role: selected,
    };

    try {
      const data = await axios.put(`/users/${email}`, userRole);

      refetch();
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user role has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };
  return (
    <>
      <div className="">
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
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Update Verification
                    </Dialog.Title>
                    <div className="mt-2 mb-12">
                      <Listbox value={selected} onChange={setSelected}>
                        <div
                          onClick={() => setIsOpen(true)}
                          className="relative mt-1"
                        >
                          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate capitalize">
                              {selected}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <LuChevronsUpDown
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute capitalize mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {userRole.map((verified, verifiedIndex) => (
                                <Listbox.Option
                                  key={verifiedIndex}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={verified}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate  ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {verified}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <FaCheck
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>

                    <div className="  mt-32 text-center">
                      <button
                        type="button"
                        className="inline-flex btn z-40 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => handleUpdateRole(user?.email)}
                      >
                        Update
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default UpdateUserRoleModal;
