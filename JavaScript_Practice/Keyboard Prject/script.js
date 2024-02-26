/*----------Find the character that pressed by Keyboard--------- 

1. Apply keydown event on window object.
2. With the help of event object find the key (event.key)
3. With the help of event.key we can find that key and with the help 
    of key we can find the ASCII code( event.key.charCodeAt() ) of that character.


*/
const container = document.querySelector(".container");

window.addEventListener("keydown", (event) => {

  /* 
    console.log("CapsLock on:",event.getModifierState("CapsLock"))
    console.log("Num lock on",event.getModifierState("NumLock"))
    console.log("Scroll lock on",event.getModifierState("ScrollLock")) 
    */


  container.innerHTML = ` 
  <table>
  <thead>
<tr>
    <th>Key</th>
    <th>Character Code (ASCII Code)</th>
    <th>Key Code</th>
    </thead>
</tr>
<tbody>
<tr>
    <td><span class="table-data" id="data-1">${
      event.key === " " ? "Space Bar" : event.key
    }</span></td>
    <td><span class="table-data" id="data-1">${event.key.charCodeAt()}</span></td>
    <td><span class="table-data" id="data-2">${event.code}</span></td>
</tr>
</tbody>
</table>`;
});
