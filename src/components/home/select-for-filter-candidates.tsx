"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";

const filterOptions = {
  skill: [
    { value: "Javascript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Nextjs", label: "Next.js" },
    { value: "Angular", label: "Angular" },
    { value: "Node.js", label: "Node.js" },
  ],
  notice: [
    { value: "Immediately Available", label: "Immediately Available" },
    { value: "1-15 days", label: "1-15 days" },
    { value: "16-30 days", label: "16-30 days" },
    { value: "46-60 days", label: "46-60 days" },
  ],
};

const SelectForFilterCandidates = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    skill: searchParams.get("skill") || "",
    notice: searchParams.get("notice") || "",
  });

  useEffect(() => {
    const updateURL = () => {
      const params = new URLSearchParams(searchParams);
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
      router.replace(`?${params.toString()}`, { scroll: false });
    };

    updateURL(); // Explicitly call the function
  }, [filters, router, searchParams]);

  return (
    <div className="mt-10 flex items-center gap-10 text-accent-foreground">
      <p>Filter By</p>
      {Object.entries(filterOptions).map(([key, options]) => (
        <Select
          key={key}
          value={filters[key as keyof typeof filters]}
          onValueChange={(val) =>
            setFilters((prev) => ({ ...prev, [key]: val }))
          }
        >
          <SelectTrigger className="w-[180px] p-5 round-md">
            <SelectValue
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};

export default SelectForFilterCandidates;
