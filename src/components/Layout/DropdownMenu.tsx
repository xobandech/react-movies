import menuImage from '../icons/menu-image.png'
import React from 'react';
import { Menu, Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent() {
    return (
      <Menu as="div" className="inline-block xl:hidden relative text-left">
      <div className="flex">
          <Menu.Button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
              <img src={menuImage} alt="menu button" className="h-[20px]" />
          </Menu.Button>
      </div>
      <Transition>
                <Menu.Items className="absolute w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Home
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/movies"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Movies
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="tv-shows"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    TV-Shows
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}