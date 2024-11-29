import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSE",
  },
]

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex items-center gap-x-2">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            ...transformedCategories,
            {
              value: "All",
              label: "دسته بندی (همه)",
            },
          ]}
        />

        <FilterDropDown filterField="sort" options={[...sortOptions]} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
