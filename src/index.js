document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', addList);

  function addList(event){
    event.preventDefault();
    const input = form.querySelector('#new-task-description').value;
    form.querySelector('#new-task-description').value = "";
    const li = document.getElementById('list').appendChild(document.createElement('li'));
    li.innerText = input;
    const btn = li.appendChild(document.createElement('button'));
    btn.innerText = 'X';
    btn.addEventListener('click', (e)=>{
      // console.log(e.target);
      li.remove();
    })
  }
});
