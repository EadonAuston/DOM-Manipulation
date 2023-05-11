/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md" 
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
// const parentContainer = document.getElementById('main');
// const allItems = document.querySelectorAll('.item');

/**
 * @task
 * Select all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

// Your code goes here...
// const sortBtn = document.querySelectorAll('.sortBtn');


/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

// Your code goes here...

   // const sortCB = (a, b) => {
   //    if (a.innerHtml < b.innerHtml) return 1;
   //    else if (a.innerHtml > b.innerHtml) return -1;
   //    else return 0;
   //  }



// Sort the array
// let newContainer = Array.from(parentContainer)
// newContainer.sort(sortCB);

// Append every child of the sorted array back to the parent Node of the nodeList.
// newContainer.forEach((item) => {
//    parentContainer.append(item);
// });

/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

// Your code goes here...
// for (let i = 0; i < Array.from(sortBtn).length; i++) {
//    sortBtn.children[i].addEventListener('click', () => {
//       sortCB();
//    })
// }



const parentContainer = document.getElementById('main');
const allItems = document.querySelectorAll('.item');
const sortBtn = document.querySelectorAll('.sortBtn');

const sortData = (direction) => {
  const sortCB = (a, b) => {
    if (direction === 'asc') {
      return a.innerHTML.localeCompare(b.innerHTML);
    } else {
      return b.innerHTML.localeCompare(a.innerHTML);
    }
  };

  const newContainer = Array.from(parentContainer.children);
  newContainer.sort(sortCB);

  newContainer.forEach((item) => {
    parentContainer.append(item);
  });
};

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener('click', () => {
    sortData(sortBtn[i].dataset.sortdir);
  });
}
