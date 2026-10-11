import { useEffect, useState } from "react";

const screenshots = [
  {
    title: "Login System",
    category: "Authentication",
    image: "login.PNG",
    description:
      "A login interface that allows authorized administrators, staff, and students to access the system based on their assigned roles.",
  },
  {
    title: "Account Creation",
    category: "Authentication",
    image: "account-creation.PNG",
    description:
      "An account management interface for creating user accounts and organizing student and staff information.",
  },
  {
    title: "Dashboard Overview",
    category: "Dashboard",
    image: "dashboard-overview.PNG",
    description:
      "A centralized dashboard that provides access to the system's main functions, including item reports, claims, search, and user management.",
  },
  {
    title: "Upload Images",
    category: "Item Management",
    image: "upload-image.PNG",
    description:
      "An image upload feature for managing item photos that can be used when reporting lost or found belongings.",
  },
  {
    title: "Sort and Filter Items",
    category: "Item Management",
    image: "sorting.PNG",
    description:
      "A sorting and filtering interface for organizing item records by category and status, making records easier to find.",
  },
  {
    title: "Claim Reports",
    category: "Claims",
    image: "claim-reports.PNG",
    description:
      "A claim management interface for reviewing requests and ownership proof before processing claimed items.",
  },
  {
    title: "Staff Search",
    category: "Staff",
    image: "staff-search.PNG",
    description:
      "A staff search interface for locating item records and helping users check information about lost or found belongings.",
  },
  {
    title: "Staff Found Items",
    category: "Staff",
    image: "staff-found-items.PNG",
    description:
      "A staff interface for viewing and managing reports of items that have been found and submitted to the system.",
  },
  {
    title: "Staff Lost Items",
    category: "Staff",
    image: "staff-lost-items.PNG",
    description:
      "A staff interface for reviewing lost-item reports and helping maintain organized records of missing belongings.",
  },
  {
    title: "Staff View All Items",
    category: "Staff",
    image: "staff-view-all-items.PNG",
    description:
      "A consolidated view of item records that helps staff browse and track lost, found, and other recorded items.",
  },
  {
    title: "Admin Found Items",
    category: "Administration",
    image: "admin-found-items.PNG",
    description:
      "An administrative interface for overseeing found-item records and managing their status within the system.",
  },
  {
    title: "Admin Lost Items",
    category: "Administration",
    image: "admin-lost-items.PNG",
    description:
      "An administrative interface for monitoring lost-item reports and maintaining the system's lost-item records.",
  },
];

export default function LostFoundShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="lost-found-showcase"
      className="bg-white px-5 py-16 text-[#4A3F35] sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">

            <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl text-[#12303A]">
             Lost and Found Management System
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#4A3F35]/75 sm:text-base">
            A web-based application developed to organize lost
            and found reports, manage item records, process claim
            requests, and provide role-based interfaces for
            students, staff, and administrators.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["HTML", "CSS", "JavaScript", "PHP", "XAMPP"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-[#4A3F35] sm:text-sm"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((item, index) => (
            <article
              key={item.image}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="block w-full cursor-zoom-in overflow-hidden bg-gray-200 p-2 text-left"
                aria-label={`View larger image: ${item.title}`}
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gray-200">
                  <img
                    src={`/projects/lost-and-found/${item.image}`}
                    alt={`${item.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>

              <div className="p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#788A72]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {item.category}
                </span>

                <h3 className="mt-2 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#4A3F35]/75">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4A3F35] transition hover:text-[#788A72]"
                >
                  View screenshot
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold">
            About the project
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#4A3F35]/80 sm:text-base">
            Developed as a web application using HTML, CSS,
            JavaScript, and PHP, with XAMPP as the local
            development environment. The system includes
            role-based access, lost and found item reporting,
            image uploads, search and filtering, claim requests,
            and administrative record management.
          </p>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4 text-white">
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {selectedImage.title}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  {selectedImage.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl transition hover:bg-white/25"
              >
                ×
              </button>
            </div>

            <div className="flex max-h-[75vh] items-center justify-center overflow-hidden rounded-xl bg-gray-200 p-2 sm:p-4">
              <img
                src={`/projects/lost-and-found/${selectedImage.image}`}
                alt={`${selectedImage.title} enlarged screenshot`}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-white/80">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
