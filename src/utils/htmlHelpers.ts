export const setInputClassNameByEditState = (editMode: boolean) =>
  `${
    editMode
      ? 'border-[1px] border-primary text-primary focus:z-10 focus:border-primary focus:outline-none placeholder-primary/[.3] p-2 px-4'
      : 'border-2 p-2 m-0 bg-gray-400'
  } bg-light rounded w-full`;
