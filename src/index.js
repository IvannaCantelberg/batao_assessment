const ACTIVE_TAB = 'active';
const TAB_CLASS = 'tab';

let selectedTabNode = null;

function onTabClick(event) {
  const self = this;
  if (self.classList.contains(ACTIVE_TAB)) return;

  selectedTabNode.classList.remove(ACTIVE_TAB);
  self.classList.add(ACTIVE_TAB);
  selectedTabNode = self;

  console.log(event, selectedTabNode);
  //   let activeTabs = document.querySelectorAll('.active');

  //   // deactivate existing active tab and panel
  //   activeTabs.forEach(function(tab) {
  //     tab.className = tab.className.replace('active', '');
  //   });

  //   // activate new tab and panel
  //   event.target.parentElement.className += ' active';
  //   document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

// const settleClickHandler = (node) => {
//   node.addEventListener('click', onTabClick, false);
// };

const initTabs = () => {
  const element = document.getElementById('tabs');
  selectedTabNode = element.getElementsByClassName(ACTIVE_TAB)[0];

  Array.from(element.children).forEach((elementNode) => {
    if (!elementNode.classList.contains(TAB_CLASS)) return;

    elementNode.addEventListener('click', onTabClick, true);
  });
};

initTabs();

// element.addEventListener('click', onTabClick, false);
