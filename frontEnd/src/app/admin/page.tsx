"use client";

import CustomLayout from "@/components/layout/layout";
import axios from "axios";
import type { Metadata } from "next";
import { useEffect, useState } from "react";

export default function Admin() {
  const [contacts, setContacts] = useState<any>([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state added

  const fetchContacts = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/contact-us`
      );
      setContacts(response.data.Data); // Assuming response.data contains an array of contacts
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false); // Stop loading after API call
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <CustomLayout>
      <div className="container mx-auto mt-10 mb-10 p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          📋 Contact Details
        </h2>

        {loading ? ( // ✅ Show loading state
          <div className="text-center py-10">
            <svg
              className="animate-spin h-10 w-10 text-blue-600 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p className="text-gray-500 mt-2">Loading contacts...</p>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-700 text-white text-left">
                  <th className="px-6 py-4 border-b text-center">Name</th>
                  <th className="px-6 py-4 border-b text-center">Email</th>
                  <th className="px-6 py-4 border-b text-center">Mobile</th>
                  <th className="px-6 py-4 border-b text-center">Message</th>
                  <th className="px-6 py-4 border-b text-center">Created At</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact: any, index: any) => (
                  <tr
                    key={index}
                    className="border-b transition duration-200 even:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-center font-medium text-black">
                      {contact.name || <span className="text-gray-400">-</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contact.email || (
                          <span className="text-gray-400">-</span>
                        )}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {contact.mobile ? (
                        <a
                          href={`tel:${contact.mobile}`}
                          className="text-blue-600 font-medium hover:underline"
                        >
                          {contact.mobile}
                        </a>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-black">
                      {contact.message || (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-blue-100 text-black px-3 py-1 rounded-md text-sm">
                        {contact.createdAt || "-"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </CustomLayout>
  );
}
