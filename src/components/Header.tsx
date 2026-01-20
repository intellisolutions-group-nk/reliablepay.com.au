"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Payroll Processing", href: "/services/payroll-processing" },
  { name: "Salary & Wage Disbursement", href: "/services/salary-disbursement" },
  { name: "Superannuation Processing", href: "/services/superannuation-processing" },
  { name: "Payroll Compliance & Reporting", href: "/services/payroll-compliance" },
  { name: "Payroll Outsourcing", href: "/services/payroll-outsourcing" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Security & Compliance", href: "/security-compliance" },
  { name: "About ReliablePay", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/RealiablePay.png"
              alt="ReliablePay"
              width={200}
              height={50}
              className="h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors relative group"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        <div className="py-2">
                          <Link
                            href="/services"
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-4 py-3 text-foreground hover:bg-card-bg hover:text-primary transition-colors border-b border-border"
                          >
                            <span className="font-medium">All Services</span>
                            <p className="text-sm text-muted mt-0.5">
                              View our complete service offering
                            </p>
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-4 py-3 text-foreground/80 hover:bg-card-bg hover:text-primary transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-border">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-primary hover:bg-card-bg rounded-lg font-medium transition-colors"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1">
                              <Link
                                href="/services"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block px-4 py-2 text-primary font-medium hover:bg-card-bg rounded-lg transition-colors"
                              >
                                All Services
                              </Link>
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-card-bg rounded-lg transition-colors text-sm"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-card-bg rounded-lg font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="pt-4 px-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
