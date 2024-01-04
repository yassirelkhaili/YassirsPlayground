/**
 * @author Yassir Elkhaili
 * @license MIT
*/
import { Team } from "./mockdata.js";
import mockData from "./mockdata.js";

const makeListElement = (content: string): HTMLLIElement => {
    const listElement = document.createElement("li") as HTMLLIElement;
    listElement.innerText = content;
    return listElement;
}

const clearSearchContent = (listElementContainer: HTMLUListElement): void => {
    while (listElementContainer.firstChild) listElementContainer.removeChild(listElementContainer.firstChild);
}

document.addEventListener("DOMContentLoaded", () => {
    const searchFilter = document.getElementById("searchFilter") as HTMLInputElement;
    const listElementContainer = document.getElementById("listContainer") as HTMLUListElement;

    searchFilter && searchFilter.addEventListener("input", (event: Event) => {
        let searchInput: string = "";
        const target = event.target as HTMLInputElement;

        if (target) searchInput = target.value;
        const filteredData: Array<Team> = mockData.filter((team: Team) => searchInput ? team.name.slice(0, searchInput.length) === searchInput : null);
        clearSearchContent(listElementContainer);
        filteredData.forEach((team: Team) => {
            const listElement = makeListElement(team.name);
            listElement.addEventListener("click", () => {
                clearSearchContent(listElementContainer);
                searchFilter.value = team.name;
            })
        !(listElementContainer.contains(listElement)) && listElementContainer.appendChild(listElement);
        })
    })
})