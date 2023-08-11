const handleSearch = (data, searchValue) => {
  console.log(data);
  const filteredData = data
    ? data.filter((hospital) => {
        const matchingServices =
          hospital.services &&
          hospital.services.some(
            (service) =>
              service.name === searchValue ||
              service.description === searchValue
          );
        return (
          hospital.name === searchValue ||
          hospital.location === searchValue ||
          hospital.description === searchValue ||
          matchingServices
        );
      })
    : [];
  console.log("from helper ...");
  console.log(filteredData);
  return filteredData;
};

export { handleSearch };
