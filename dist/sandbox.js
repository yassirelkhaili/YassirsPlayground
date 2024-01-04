import mockData from "./mockdata.js";
const makeListElement = (content) => {
    const listElement = document.createElement("li");
    listElement.innerText = content;
    return listElement;
};
const clearSearchContent = (listElementContainer) => {
    while (listElementContainer.firstChild)
        listElementContainer.removeChild(listElementContainer.firstChild);
};
document.addEventListener("DOMContentLoaded", () => {
    const searchFilter = document.getElementById("searchFilter");
    const listElementContainer = document.getElementById("listContainer");
    searchFilter && searchFilter.addEventListener("input", (event) => {
        let searchInput = "";
        const target = event.target;
        if (target)
            searchInput = target.value;
        const filteredData = mockData.filter((team) => searchInput ? team.name.slice(0, searchInput.length) === searchInput : null);
        clearSearchContent(listElementContainer);
        filteredData.forEach((team) => {
            const listElement = makeListElement(team.name);
            listElement.addEventListener("click", () => {
                clearSearchContent(listElementContainer);
                searchFilter.value = team.name;
            });
            !(listElementContainer.contains(listElement)) && listElementContainer.appendChild(listElement);
        });
    });
});
