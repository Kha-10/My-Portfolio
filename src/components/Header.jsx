import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    // Add smooth scrolling behavior to the whole document
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up the effect
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const menuItems = [
    "Home",
    "About me",
    // "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];

  //   const handleMenuItemClick = (item) => {
  //     const element = document.getElementById(item.toLowerCase());
  //     if (element) {
  //       // Close the mobile menu
  //       setIsMenuOpen(false);

  //       // Scroll to the element
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const handleMenuItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      setIsMenuOpen(false);

      // Add a small delay to ensure the menu closing animation doesn't interfere with scrolling
      setTimeout(() => {
        const headerHeight = window.innerWidth > 768 ? 58 : 134;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-gray-800 dark:text-white"
          whileHover={{ scale: 1.1 }}
        >
          Kyaw Htet Aung
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleMenuItemClick(item)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800"
          >
            <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className="text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center"
              >
                {isDark ? (
                  <Sun size={20} className="mr-2" />
                ) : (
                  <Moon size={20} className="mr-2" />
                )}
                {/* {isDark ? "Light Mode" : "Dark Mode"} */}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}