'use client'
import Link from "next/link";
import { useState } from "react";

// Componente de menú desplegable simple
export function SimpleDropdown({
    title,
    items,
  }: {
    title: string
    items: { title: string; href: string }[]
  }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="relative z-80">
        {/* Botón del menú desplegable */}
        <button className="flex items-center hover:text-yellow-500 text-white" onClick={() => setIsOpen(!isOpen)}>
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
  
        {/* Contenido del menú desplegable */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-2  bg-slate-950/80  w-48 rounded-mdpy-2 shadow-xl">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-4 py-2 text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
  