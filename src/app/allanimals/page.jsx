"use client";
import Card from "@/components/card";
import { Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";

const Allanimals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("/animal.json");
      const json = await res.json();
      setData(json);
    };

    load();
  }, []);

  // data Shortin

  const [sort, setSort] = useState("all");

  let sortData = [...data];

  if (sort === "high-to-low") {
    sortData.sort((a, b) => b.price - a.price);
  }

  if (sort === "low-to-high") {
    sortData.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="w-11/12 mx-auto pt-7 pb-7">
      <div className="text-center pb-5">
        <h2 className="text-4xl font-bold">all animals in one place</h2>
      </div>

      {/* ==========Sort Select form heroui============== */}
      <div className="pb-10">
        <Select onChange={setSort} value={sort} className="w-[256px]">
          <Label>Sort by price</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="all">
                All
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="high-to-low">
                High to Low
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="low-to-high">
                Low to High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* ===============All Cards==================== */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
          {sortData.map((animal) => (
            <Card key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allanimals;
